import React from "react"
import HomeArticleItem from "./home-item";
import { RecentArticlesQuery } from "../../../../types/graphql-types"

type Props = {
    data: RecentArticlesQuery
}

const HomeArticleList: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data.allContentfulBlog.edges.map(page =>
                <HomeArticleItem
                    key={page.node.slug}
                    title={page.node.title}
                    slug={page.node.slug}
                    description={page.node.description.description}
                    imagePath={page.node.coverImage.file.url}
                    updatedAt={page.node.updatedAt}
                />
            )}
        </>
    )
}

export default HomeArticleList