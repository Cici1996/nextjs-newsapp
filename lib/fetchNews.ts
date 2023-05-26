import { gql } from "graphql-request"

const fetchNews = async (
    category?: Category | string,
    keyword?: string,
    isDynamic?: boolean
) => {

    const query = gql`
                query MyQuery {
                    $access_key: String!
                    $categories: String!
                    $keywords: String
                    myQuery(
                        access_key: $access_key
                        categories: $categories
                        keywords: $keywords
                        countries:'gb'
                        sort:'published_desc') {
                    data {
                        author
                        category
                        country
                        image
                        language
                        published_at
                        source
                        title
                        url
                    }
                    pagination {
                        count
                        limit
                        offset
                        total
                    }
                    }
                }`

}

export default fetchNews