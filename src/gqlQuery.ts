import { gql, GraphQLClient } from "graphql-request";

export const gqlEndpoint = process.env.CANVAS_ENDPOINT;

export const query = gql`
  query MyQuery {
    allCourses {
      _id
      courseCode
      name
    }
  }
`;

export const extendedQuery = gql`
  query MyQuery {
    allCourses {
      _id
      courseCode
      name
      sisId
      modulesConnection {
        nodes {
          _id
          name
          moduleItems {
            _id
            url
            content {
              ... on Page {
                id
                _id
                title
              }
              ... on Assignment {
                id
                name
                _id
                description
                createdAt
                dueAt
                htmlUrl
                pointsPossible
                state
                sisId
              }
              ... on File {
                id
                _id
                contentType
                displayName
                thumbnailUrl
                url
              }
              ... on ExternalTool {
                createdAt
                description
                _id
                name
                url
              }
              ... on Quiz {
                id
                _id
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;

export const highVolumeQuery = gql`
  query MyQuery {
    allCourses {
      _id
      courseCode
      name
      sisId
      modulesConnection {
        nodes {
          _id
          name
          moduleItems {
            _id
            url
            content {
              ... on Page {
                id
                _id
                title
              }
              ... on Assignment {
                id
                name
                _id
                description
                createdAt
                dueAt
                htmlUrl
                pointsPossible
                state
                sisId
                rubric {
                  _id
                  pointsPossible
                  title
                  criteria {
                    _id
                    description
                    criterionUseRange
                    longDescription
                    points
                  }
                }
              }
              ... on File {
                id
                _id
                contentType
                displayName
                thumbnailUrl
                url
              }
              ... on ExternalTool {
                createdAt
                description
                _id
                name
                url
              }
              ... on Quiz {
                id
                _id
              }
              ... on SubHeader {
                title
              }
              ... on ExternalUrl {
                createdAt
                title
                _id
                url
              }
            }
          }
          createdAt
        }
      }
      imageUrl
      account {
        _id
        name
      }
    }
  }
`;

export default new GraphQLClient(gqlEndpoint).setHeader(
  "authorization",
  `Bearer ${process.env.CANVAS_AUTH_TOKEN}`
);
