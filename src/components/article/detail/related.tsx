import React from "react"
import { Maybe, ContentfulBlog } from "../../../../types/graphql-types"
import HomeArticleItem from "../list/home-item";

type Props = {
    relatedPosts?: Maybe<Array<Maybe<ContentfulBlog>>>,
}
const RelatedArticles: React.FC<Props> = ({ relatedPosts }) => {
    if (!relatedPosts) return <></>
    return (
        <div style={{ marginTop: '20px' }}>
            {relatedPosts.map(post =>
                <HomeArticleItem
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    description={post.description.description}
                    imagePath={post.coverImage.file.url}
                    updatedAt={post.updatedAt}
                />
            )}
        </div>
    )
}

export default RelatedArticles