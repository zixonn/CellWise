import { gql } from '@apollo/client';

export const GET_ORGANIZATIONS = gql`
  query PublicSearchFaceted($term: String!, $state: String!) {
    publicSearchFaceted(term: $term, state: $state) {
      size
      from
      term
      result_count
      results {
        ein
        name
        mission
        organization_url
        charity_navigator_url
        encompass_score
        encompass_star_rating
        encompass_publication_date
        cause
        street
        street2
        city
        state
        zip
        country
        highest_level_advisory
        encompass_rating_id
      }
    }
  }
`;
