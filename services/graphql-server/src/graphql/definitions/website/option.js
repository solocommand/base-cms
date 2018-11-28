const gql = require('graphql-tag');

module.exports = gql`

extend type Query {
  websiteOption(input: WebsiteOptionQueryInput!): WebsiteOption @findOne(model: "website.Option", using: { id: "_id" })
  websiteOptions(input: WebsiteOptionsQueryInput!): WebsiteOptionConnection! @findMany(model: "website.Option")
  websiteOptionsForSite(input: WebsiteOptionsForSiteQueryInput!): WebsiteOptionConnection! @findMany(model: "website.Option", using: { siteId: "site.$id" })
}

type WebsiteOption {
  # fields directly from website.model::Option
  id: Int! @value(localField: "_id")
  name: String
  description: String
  site(input: WebsiteOptionSiteInput = {}): WebsiteSite @refOne(model: "platform.Product", criteria: "websiteSite")

  # fields from platform.trait::StatusEnabled
  status: Int
}

type WebsiteOptionConnection {
  totalCount: Int!
  edges: [WebsiteOptionEdge]!
  pageInfo: PageInfo!
}

type WebsiteOptionEdge {
  node: WebsiteOption!
  cursor: String!
}

enum WebsiteOptionSortField {
  id
  name
}

input WebsiteOptionQueryInput {
  id: Int!
  status: ModelStatus = active
}

input WebsiteOptionSiteInput {
  status: ModelStatus = active
}

input WebsiteOptionsQueryInput {
  status: ModelStatus = active
  sort: WebsiteOptionSortInput = {}
  pagination: PaginationInput = {}
}

input WebsiteOptionsForSiteQueryInput {
  siteId: ObjectID!
  status: ModelStatus = active
  sort: WebsiteOptionSortInput = {}
  pagination: PaginationInput = {}
}

input WebsiteOptionSortInput {
  field: WebsiteOptionSortField = id
  order: SortOrder = desc
}

input RelatedWebsiteOptionsInput {
  status: ModelStatus = active
  sort: WebsiteOptionSortInput = {}
  pagination: PaginationInput = {}
}

`;