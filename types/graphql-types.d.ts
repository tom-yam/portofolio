export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  contentful_id?: Maybe<Scalars['String']>,
  file?: Maybe<ContentfulAssetFile>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  node_locale?: Maybe<Scalars['String']>,
  fixed?: Maybe<ContentfulFixed>,
  resolutions?: Maybe<ContentfulResolutions>,
  fluid?: Maybe<ContentfulFluid>,
  sizes?: Maybe<ContentfulSizes>,
  resize?: Maybe<ContentfulResize>,
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ContentfulImageFormat>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  resizingBehavior?: Maybe<ImageResizingBehavior>,
  toFormat?: Maybe<ContentfulImageFormat>,
  cropFocus?: Maybe<ContentfulImageCropFocus>,
  background?: Maybe<Scalars['String']>
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulAssetGroupConnection>,
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulAssetFieldsEnum
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>,
  node: ContentfulAsset,
  previous?: Maybe<ContentfulAsset>,
};

export type ContentfulAssetFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>,
  details?: Maybe<ContentfulAssetFileDetails>,
  fileName?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>,
  image?: Maybe<ContentfulAssetFileDetailsImage>,
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>,
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>,
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  contentType?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>,
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulAssetEdge>,
  nodes: Array<ContentfulAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlog = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  coverImage?: Maybe<ContentfulAsset>,
  relatedPosts?: Maybe<Array<Maybe<ContentfulBlog>>>,
  description?: Maybe<ContentfulBlogDescriptionTextNode>,
  body?: Maybe<ContentfulBlogBodyTextNode>,
  spaceId?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  sys?: Maybe<ContentfulBlogSys>,
  node_locale?: Maybe<Scalars['String']>,
  blog?: Maybe<Array<Maybe<ContentfulBlog>>>,
  childContentfulBlogDescriptionTextNode?: Maybe<ContentfulBlogDescriptionTextNode>,
  childContentfulBlogBodyTextNode?: Maybe<ContentfulBlogBodyTextNode>,
};


export type ContentfulBlogCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type ContentfulBlogUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type ContentfulBlogBodyTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  body?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};

export type ContentfulBlogBodyTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogBodyTextNodeEdge>,
  nodes: Array<ContentfulBlogBodyTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogBodyTextNodeGroupConnection>,
};


export type ContentfulBlogBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogBodyTextNodeFieldsEnum
};


export type ContentfulBlogBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogBodyTextNodeFieldsEnum
};

export type ContentfulBlogBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogBodyTextNode>,
  node: ContentfulBlogBodyTextNode,
  previous?: Maybe<ContentfulBlogBodyTextNode>,
};

export type ContentfulBlogBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulBlogBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type ContentfulBlogBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogBodyTextNodeEdge>,
  nodes: Array<ContentfulBlogBodyTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogBodyTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogEdge>,
  nodes: Array<ContentfulBlog>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogGroupConnection>,
};


export type ContentfulBlogConnectionDistinctArgs = {
  field: ContentfulBlogFieldsEnum
};


export type ContentfulBlogConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogFieldsEnum
};

export type ContentfulBlogDescriptionTextNode = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  description?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};

export type ContentfulBlogDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogDescriptionTextNodeEdge>,
  nodes: Array<ContentfulBlogDescriptionTextNode>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulBlogDescriptionTextNodeGroupConnection>,
};


export type ContentfulBlogDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogDescriptionTextNodeFieldsEnum
};


export type ContentfulBlogDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulBlogDescriptionTextNodeFieldsEnum
};

export type ContentfulBlogDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogDescriptionTextNode>,
  node: ContentfulBlogDescriptionTextNode,
  previous?: Maybe<ContentfulBlogDescriptionTextNode>,
};

export type ContentfulBlogDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type ContentfulBlogDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type ContentfulBlogDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogDescriptionTextNodeEdge>,
  nodes: Array<ContentfulBlogDescriptionTextNode>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogDescriptionTextNodeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogEdge = {
  next?: Maybe<ContentfulBlog>,
  node: ContentfulBlog,
  previous?: Maybe<ContentfulBlog>,
};

export type ContentfulBlogFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'tags' |
  'coverImage___id' |
  'coverImage___parent___id' |
  'coverImage___parent___parent___id' |
  'coverImage___parent___parent___children' |
  'coverImage___parent___children' |
  'coverImage___parent___children___id' |
  'coverImage___parent___children___children' |
  'coverImage___parent___internal___content' |
  'coverImage___parent___internal___contentDigest' |
  'coverImage___parent___internal___description' |
  'coverImage___parent___internal___fieldOwners' |
  'coverImage___parent___internal___ignoreType' |
  'coverImage___parent___internal___mediaType' |
  'coverImage___parent___internal___owner' |
  'coverImage___parent___internal___type' |
  'coverImage___children' |
  'coverImage___children___id' |
  'coverImage___children___parent___id' |
  'coverImage___children___parent___children' |
  'coverImage___children___children' |
  'coverImage___children___children___id' |
  'coverImage___children___children___children' |
  'coverImage___children___internal___content' |
  'coverImage___children___internal___contentDigest' |
  'coverImage___children___internal___description' |
  'coverImage___children___internal___fieldOwners' |
  'coverImage___children___internal___ignoreType' |
  'coverImage___children___internal___mediaType' |
  'coverImage___children___internal___owner' |
  'coverImage___children___internal___type' |
  'coverImage___internal___content' |
  'coverImage___internal___contentDigest' |
  'coverImage___internal___description' |
  'coverImage___internal___fieldOwners' |
  'coverImage___internal___ignoreType' |
  'coverImage___internal___mediaType' |
  'coverImage___internal___owner' |
  'coverImage___internal___type' |
  'coverImage___contentful_id' |
  'coverImage___file___url' |
  'coverImage___file___details___size' |
  'coverImage___file___fileName' |
  'coverImage___file___contentType' |
  'coverImage___title' |
  'coverImage___description' |
  'coverImage___node_locale' |
  'coverImage___fixed___base64' |
  'coverImage___fixed___tracedSVG' |
  'coverImage___fixed___aspectRatio' |
  'coverImage___fixed___width' |
  'coverImage___fixed___height' |
  'coverImage___fixed___src' |
  'coverImage___fixed___srcSet' |
  'coverImage___fixed___srcWebp' |
  'coverImage___fixed___srcSetWebp' |
  'coverImage___resolutions___base64' |
  'coverImage___resolutions___tracedSVG' |
  'coverImage___resolutions___aspectRatio' |
  'coverImage___resolutions___width' |
  'coverImage___resolutions___height' |
  'coverImage___resolutions___src' |
  'coverImage___resolutions___srcSet' |
  'coverImage___resolutions___srcWebp' |
  'coverImage___resolutions___srcSetWebp' |
  'coverImage___fluid___base64' |
  'coverImage___fluid___tracedSVG' |
  'coverImage___fluid___aspectRatio' |
  'coverImage___fluid___src' |
  'coverImage___fluid___srcSet' |
  'coverImage___fluid___srcWebp' |
  'coverImage___fluid___srcSetWebp' |
  'coverImage___fluid___sizes' |
  'coverImage___sizes___base64' |
  'coverImage___sizes___tracedSVG' |
  'coverImage___sizes___aspectRatio' |
  'coverImage___sizes___src' |
  'coverImage___sizes___srcSet' |
  'coverImage___sizes___srcWebp' |
  'coverImage___sizes___srcSetWebp' |
  'coverImage___sizes___sizes' |
  'coverImage___resize___base64' |
  'coverImage___resize___tracedSVG' |
  'coverImage___resize___src' |
  'coverImage___resize___width' |
  'coverImage___resize___height' |
  'coverImage___resize___aspectRatio' |
  'relatedPosts' |
  'relatedPosts___id' |
  'relatedPosts___parent___id' |
  'relatedPosts___parent___parent___id' |
  'relatedPosts___parent___parent___children' |
  'relatedPosts___parent___children' |
  'relatedPosts___parent___children___id' |
  'relatedPosts___parent___children___children' |
  'relatedPosts___parent___internal___content' |
  'relatedPosts___parent___internal___contentDigest' |
  'relatedPosts___parent___internal___description' |
  'relatedPosts___parent___internal___fieldOwners' |
  'relatedPosts___parent___internal___ignoreType' |
  'relatedPosts___parent___internal___mediaType' |
  'relatedPosts___parent___internal___owner' |
  'relatedPosts___parent___internal___type' |
  'relatedPosts___children' |
  'relatedPosts___children___id' |
  'relatedPosts___children___parent___id' |
  'relatedPosts___children___parent___children' |
  'relatedPosts___children___children' |
  'relatedPosts___children___children___id' |
  'relatedPosts___children___children___children' |
  'relatedPosts___children___internal___content' |
  'relatedPosts___children___internal___contentDigest' |
  'relatedPosts___children___internal___description' |
  'relatedPosts___children___internal___fieldOwners' |
  'relatedPosts___children___internal___ignoreType' |
  'relatedPosts___children___internal___mediaType' |
  'relatedPosts___children___internal___owner' |
  'relatedPosts___children___internal___type' |
  'relatedPosts___internal___content' |
  'relatedPosts___internal___contentDigest' |
  'relatedPosts___internal___description' |
  'relatedPosts___internal___fieldOwners' |
  'relatedPosts___internal___ignoreType' |
  'relatedPosts___internal___mediaType' |
  'relatedPosts___internal___owner' |
  'relatedPosts___internal___type' |
  'relatedPosts___title' |
  'relatedPosts___slug' |
  'relatedPosts___tags' |
  'relatedPosts___coverImage___id' |
  'relatedPosts___coverImage___parent___id' |
  'relatedPosts___coverImage___parent___children' |
  'relatedPosts___coverImage___children' |
  'relatedPosts___coverImage___children___id' |
  'relatedPosts___coverImage___children___children' |
  'relatedPosts___coverImage___internal___content' |
  'relatedPosts___coverImage___internal___contentDigest' |
  'relatedPosts___coverImage___internal___description' |
  'relatedPosts___coverImage___internal___fieldOwners' |
  'relatedPosts___coverImage___internal___ignoreType' |
  'relatedPosts___coverImage___internal___mediaType' |
  'relatedPosts___coverImage___internal___owner' |
  'relatedPosts___coverImage___internal___type' |
  'relatedPosts___coverImage___contentful_id' |
  'relatedPosts___coverImage___file___url' |
  'relatedPosts___coverImage___file___fileName' |
  'relatedPosts___coverImage___file___contentType' |
  'relatedPosts___coverImage___title' |
  'relatedPosts___coverImage___description' |
  'relatedPosts___coverImage___node_locale' |
  'relatedPosts___coverImage___fixed___base64' |
  'relatedPosts___coverImage___fixed___tracedSVG' |
  'relatedPosts___coverImage___fixed___aspectRatio' |
  'relatedPosts___coverImage___fixed___width' |
  'relatedPosts___coverImage___fixed___height' |
  'relatedPosts___coverImage___fixed___src' |
  'relatedPosts___coverImage___fixed___srcSet' |
  'relatedPosts___coverImage___fixed___srcWebp' |
  'relatedPosts___coverImage___fixed___srcSetWebp' |
  'relatedPosts___coverImage___resolutions___base64' |
  'relatedPosts___coverImage___resolutions___tracedSVG' |
  'relatedPosts___coverImage___resolutions___aspectRatio' |
  'relatedPosts___coverImage___resolutions___width' |
  'relatedPosts___coverImage___resolutions___height' |
  'relatedPosts___coverImage___resolutions___src' |
  'relatedPosts___coverImage___resolutions___srcSet' |
  'relatedPosts___coverImage___resolutions___srcWebp' |
  'relatedPosts___coverImage___resolutions___srcSetWebp' |
  'relatedPosts___coverImage___fluid___base64' |
  'relatedPosts___coverImage___fluid___tracedSVG' |
  'relatedPosts___coverImage___fluid___aspectRatio' |
  'relatedPosts___coverImage___fluid___src' |
  'relatedPosts___coverImage___fluid___srcSet' |
  'relatedPosts___coverImage___fluid___srcWebp' |
  'relatedPosts___coverImage___fluid___srcSetWebp' |
  'relatedPosts___coverImage___fluid___sizes' |
  'relatedPosts___coverImage___sizes___base64' |
  'relatedPosts___coverImage___sizes___tracedSVG' |
  'relatedPosts___coverImage___sizes___aspectRatio' |
  'relatedPosts___coverImage___sizes___src' |
  'relatedPosts___coverImage___sizes___srcSet' |
  'relatedPosts___coverImage___sizes___srcWebp' |
  'relatedPosts___coverImage___sizes___srcSetWebp' |
  'relatedPosts___coverImage___sizes___sizes' |
  'relatedPosts___coverImage___resize___base64' |
  'relatedPosts___coverImage___resize___tracedSVG' |
  'relatedPosts___coverImage___resize___src' |
  'relatedPosts___coverImage___resize___width' |
  'relatedPosts___coverImage___resize___height' |
  'relatedPosts___coverImage___resize___aspectRatio' |
  'relatedPosts___relatedPosts' |
  'relatedPosts___relatedPosts___id' |
  'relatedPosts___relatedPosts___parent___id' |
  'relatedPosts___relatedPosts___parent___children' |
  'relatedPosts___relatedPosts___children' |
  'relatedPosts___relatedPosts___children___id' |
  'relatedPosts___relatedPosts___children___children' |
  'relatedPosts___relatedPosts___internal___content' |
  'relatedPosts___relatedPosts___internal___contentDigest' |
  'relatedPosts___relatedPosts___internal___description' |
  'relatedPosts___relatedPosts___internal___fieldOwners' |
  'relatedPosts___relatedPosts___internal___ignoreType' |
  'relatedPosts___relatedPosts___internal___mediaType' |
  'relatedPosts___relatedPosts___internal___owner' |
  'relatedPosts___relatedPosts___internal___type' |
  'relatedPosts___relatedPosts___title' |
  'relatedPosts___relatedPosts___slug' |
  'relatedPosts___relatedPosts___tags' |
  'relatedPosts___relatedPosts___coverImage___id' |
  'relatedPosts___relatedPosts___coverImage___children' |
  'relatedPosts___relatedPosts___coverImage___contentful_id' |
  'relatedPosts___relatedPosts___coverImage___title' |
  'relatedPosts___relatedPosts___coverImage___description' |
  'relatedPosts___relatedPosts___coverImage___node_locale' |
  'relatedPosts___relatedPosts___relatedPosts' |
  'relatedPosts___relatedPosts___relatedPosts___id' |
  'relatedPosts___relatedPosts___relatedPosts___children' |
  'relatedPosts___relatedPosts___relatedPosts___title' |
  'relatedPosts___relatedPosts___relatedPosts___slug' |
  'relatedPosts___relatedPosts___relatedPosts___tags' |
  'relatedPosts___relatedPosts___relatedPosts___relatedPosts' |
  'relatedPosts___relatedPosts___relatedPosts___spaceId' |
  'relatedPosts___relatedPosts___relatedPosts___contentful_id' |
  'relatedPosts___relatedPosts___relatedPosts___createdAt' |
  'relatedPosts___relatedPosts___relatedPosts___updatedAt' |
  'relatedPosts___relatedPosts___relatedPosts___node_locale' |
  'relatedPosts___relatedPosts___relatedPosts___blog' |
  'relatedPosts___relatedPosts___description___id' |
  'relatedPosts___relatedPosts___description___children' |
  'relatedPosts___relatedPosts___description___description' |
  'relatedPosts___relatedPosts___body___id' |
  'relatedPosts___relatedPosts___body___children' |
  'relatedPosts___relatedPosts___body___body' |
  'relatedPosts___relatedPosts___spaceId' |
  'relatedPosts___relatedPosts___contentful_id' |
  'relatedPosts___relatedPosts___createdAt' |
  'relatedPosts___relatedPosts___updatedAt' |
  'relatedPosts___relatedPosts___sys___revision' |
  'relatedPosts___relatedPosts___node_locale' |
  'relatedPosts___relatedPosts___blog' |
  'relatedPosts___relatedPosts___blog___id' |
  'relatedPosts___relatedPosts___blog___children' |
  'relatedPosts___relatedPosts___blog___title' |
  'relatedPosts___relatedPosts___blog___slug' |
  'relatedPosts___relatedPosts___blog___tags' |
  'relatedPosts___relatedPosts___blog___relatedPosts' |
  'relatedPosts___relatedPosts___blog___spaceId' |
  'relatedPosts___relatedPosts___blog___contentful_id' |
  'relatedPosts___relatedPosts___blog___createdAt' |
  'relatedPosts___relatedPosts___blog___updatedAt' |
  'relatedPosts___relatedPosts___blog___node_locale' |
  'relatedPosts___relatedPosts___blog___blog' |
  'relatedPosts___relatedPosts___childContentfulBlogDescriptionTextNode___id' |
  'relatedPosts___relatedPosts___childContentfulBlogDescriptionTextNode___children' |
  'relatedPosts___relatedPosts___childContentfulBlogDescriptionTextNode___description' |
  'relatedPosts___relatedPosts___childContentfulBlogBodyTextNode___id' |
  'relatedPosts___relatedPosts___childContentfulBlogBodyTextNode___children' |
  'relatedPosts___relatedPosts___childContentfulBlogBodyTextNode___body' |
  'relatedPosts___description___id' |
  'relatedPosts___description___parent___id' |
  'relatedPosts___description___parent___children' |
  'relatedPosts___description___children' |
  'relatedPosts___description___children___id' |
  'relatedPosts___description___children___children' |
  'relatedPosts___description___internal___content' |
  'relatedPosts___description___internal___contentDigest' |
  'relatedPosts___description___internal___description' |
  'relatedPosts___description___internal___fieldOwners' |
  'relatedPosts___description___internal___ignoreType' |
  'relatedPosts___description___internal___mediaType' |
  'relatedPosts___description___internal___owner' |
  'relatedPosts___description___internal___type' |
  'relatedPosts___description___description' |
  'relatedPosts___description___childMarkdownRemark___id' |
  'relatedPosts___description___childMarkdownRemark___excerpt' |
  'relatedPosts___description___childMarkdownRemark___rawMarkdownBody' |
  'relatedPosts___description___childMarkdownRemark___html' |
  'relatedPosts___description___childMarkdownRemark___htmlAst' |
  'relatedPosts___description___childMarkdownRemark___excerptAst' |
  'relatedPosts___description___childMarkdownRemark___headings' |
  'relatedPosts___description___childMarkdownRemark___timeToRead' |
  'relatedPosts___description___childMarkdownRemark___tableOfContents' |
  'relatedPosts___description___childMarkdownRemark___children' |
  'relatedPosts___body___id' |
  'relatedPosts___body___parent___id' |
  'relatedPosts___body___parent___children' |
  'relatedPosts___body___children' |
  'relatedPosts___body___children___id' |
  'relatedPosts___body___children___children' |
  'relatedPosts___body___internal___content' |
  'relatedPosts___body___internal___contentDigest' |
  'relatedPosts___body___internal___description' |
  'relatedPosts___body___internal___fieldOwners' |
  'relatedPosts___body___internal___ignoreType' |
  'relatedPosts___body___internal___mediaType' |
  'relatedPosts___body___internal___owner' |
  'relatedPosts___body___internal___type' |
  'relatedPosts___body___body' |
  'relatedPosts___body___childMarkdownRemark___id' |
  'relatedPosts___body___childMarkdownRemark___excerpt' |
  'relatedPosts___body___childMarkdownRemark___rawMarkdownBody' |
  'relatedPosts___body___childMarkdownRemark___html' |
  'relatedPosts___body___childMarkdownRemark___htmlAst' |
  'relatedPosts___body___childMarkdownRemark___excerptAst' |
  'relatedPosts___body___childMarkdownRemark___headings' |
  'relatedPosts___body___childMarkdownRemark___timeToRead' |
  'relatedPosts___body___childMarkdownRemark___tableOfContents' |
  'relatedPosts___body___childMarkdownRemark___children' |
  'relatedPosts___spaceId' |
  'relatedPosts___contentful_id' |
  'relatedPosts___createdAt' |
  'relatedPosts___updatedAt' |
  'relatedPosts___sys___revision' |
  'relatedPosts___node_locale' |
  'relatedPosts___blog' |
  'relatedPosts___blog___id' |
  'relatedPosts___blog___parent___id' |
  'relatedPosts___blog___parent___children' |
  'relatedPosts___blog___children' |
  'relatedPosts___blog___children___id' |
  'relatedPosts___blog___children___children' |
  'relatedPosts___blog___internal___content' |
  'relatedPosts___blog___internal___contentDigest' |
  'relatedPosts___blog___internal___description' |
  'relatedPosts___blog___internal___fieldOwners' |
  'relatedPosts___blog___internal___ignoreType' |
  'relatedPosts___blog___internal___mediaType' |
  'relatedPosts___blog___internal___owner' |
  'relatedPosts___blog___internal___type' |
  'relatedPosts___blog___title' |
  'relatedPosts___blog___slug' |
  'relatedPosts___blog___tags' |
  'relatedPosts___blog___coverImage___id' |
  'relatedPosts___blog___coverImage___children' |
  'relatedPosts___blog___coverImage___contentful_id' |
  'relatedPosts___blog___coverImage___title' |
  'relatedPosts___blog___coverImage___description' |
  'relatedPosts___blog___coverImage___node_locale' |
  'relatedPosts___blog___relatedPosts' |
  'relatedPosts___blog___relatedPosts___id' |
  'relatedPosts___blog___relatedPosts___children' |
  'relatedPosts___blog___relatedPosts___title' |
  'relatedPosts___blog___relatedPosts___slug' |
  'relatedPosts___blog___relatedPosts___tags' |
  'relatedPosts___blog___relatedPosts___relatedPosts' |
  'relatedPosts___blog___relatedPosts___spaceId' |
  'relatedPosts___blog___relatedPosts___contentful_id' |
  'relatedPosts___blog___relatedPosts___createdAt' |
  'relatedPosts___blog___relatedPosts___updatedAt' |
  'relatedPosts___blog___relatedPosts___node_locale' |
  'relatedPosts___blog___relatedPosts___blog' |
  'relatedPosts___blog___description___id' |
  'relatedPosts___blog___description___children' |
  'relatedPosts___blog___description___description' |
  'relatedPosts___blog___body___id' |
  'relatedPosts___blog___body___children' |
  'relatedPosts___blog___body___body' |
  'relatedPosts___blog___spaceId' |
  'relatedPosts___blog___contentful_id' |
  'relatedPosts___blog___createdAt' |
  'relatedPosts___blog___updatedAt' |
  'relatedPosts___blog___sys___revision' |
  'relatedPosts___blog___node_locale' |
  'relatedPosts___blog___blog' |
  'relatedPosts___blog___blog___id' |
  'relatedPosts___blog___blog___children' |
  'relatedPosts___blog___blog___title' |
  'relatedPosts___blog___blog___slug' |
  'relatedPosts___blog___blog___tags' |
  'relatedPosts___blog___blog___relatedPosts' |
  'relatedPosts___blog___blog___spaceId' |
  'relatedPosts___blog___blog___contentful_id' |
  'relatedPosts___blog___blog___createdAt' |
  'relatedPosts___blog___blog___updatedAt' |
  'relatedPosts___blog___blog___node_locale' |
  'relatedPosts___blog___blog___blog' |
  'relatedPosts___blog___childContentfulBlogDescriptionTextNode___id' |
  'relatedPosts___blog___childContentfulBlogDescriptionTextNode___children' |
  'relatedPosts___blog___childContentfulBlogDescriptionTextNode___description' |
  'relatedPosts___blog___childContentfulBlogBodyTextNode___id' |
  'relatedPosts___blog___childContentfulBlogBodyTextNode___children' |
  'relatedPosts___blog___childContentfulBlogBodyTextNode___body' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___id' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___parent___id' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___parent___children' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___children' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___children___id' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___children___children' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___content' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___contentDigest' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___description' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___fieldOwners' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___ignoreType' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___mediaType' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___owner' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___internal___type' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___description' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___id' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___excerpt' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___html' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___headings' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'relatedPosts___childContentfulBlogDescriptionTextNode___childMarkdownRemark___children' |
  'relatedPosts___childContentfulBlogBodyTextNode___id' |
  'relatedPosts___childContentfulBlogBodyTextNode___parent___id' |
  'relatedPosts___childContentfulBlogBodyTextNode___parent___children' |
  'relatedPosts___childContentfulBlogBodyTextNode___children' |
  'relatedPosts___childContentfulBlogBodyTextNode___children___id' |
  'relatedPosts___childContentfulBlogBodyTextNode___children___children' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___content' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___contentDigest' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___description' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___fieldOwners' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___ignoreType' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___mediaType' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___owner' |
  'relatedPosts___childContentfulBlogBodyTextNode___internal___type' |
  'relatedPosts___childContentfulBlogBodyTextNode___body' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___id' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___excerpt' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___html' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___htmlAst' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___excerptAst' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___headings' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___timeToRead' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___tableOfContents' |
  'relatedPosts___childContentfulBlogBodyTextNode___childMarkdownRemark___children' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'description___childMarkdownRemark___id' |
  'description___childMarkdownRemark___frontmatter___title' |
  'description___childMarkdownRemark___excerpt' |
  'description___childMarkdownRemark___rawMarkdownBody' |
  'description___childMarkdownRemark___html' |
  'description___childMarkdownRemark___htmlAst' |
  'description___childMarkdownRemark___excerptAst' |
  'description___childMarkdownRemark___headings' |
  'description___childMarkdownRemark___headings___value' |
  'description___childMarkdownRemark___headings___depth' |
  'description___childMarkdownRemark___timeToRead' |
  'description___childMarkdownRemark___tableOfContents' |
  'description___childMarkdownRemark___wordCount___paragraphs' |
  'description___childMarkdownRemark___wordCount___sentences' |
  'description___childMarkdownRemark___wordCount___words' |
  'description___childMarkdownRemark___parent___id' |
  'description___childMarkdownRemark___parent___children' |
  'description___childMarkdownRemark___children' |
  'description___childMarkdownRemark___children___id' |
  'description___childMarkdownRemark___children___children' |
  'description___childMarkdownRemark___internal___content' |
  'description___childMarkdownRemark___internal___contentDigest' |
  'description___childMarkdownRemark___internal___description' |
  'description___childMarkdownRemark___internal___fieldOwners' |
  'description___childMarkdownRemark___internal___ignoreType' |
  'description___childMarkdownRemark___internal___mediaType' |
  'description___childMarkdownRemark___internal___owner' |
  'description___childMarkdownRemark___internal___type' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'body___childMarkdownRemark___id' |
  'body___childMarkdownRemark___frontmatter___title' |
  'body___childMarkdownRemark___excerpt' |
  'body___childMarkdownRemark___rawMarkdownBody' |
  'body___childMarkdownRemark___html' |
  'body___childMarkdownRemark___htmlAst' |
  'body___childMarkdownRemark___excerptAst' |
  'body___childMarkdownRemark___headings' |
  'body___childMarkdownRemark___headings___value' |
  'body___childMarkdownRemark___headings___depth' |
  'body___childMarkdownRemark___timeToRead' |
  'body___childMarkdownRemark___tableOfContents' |
  'body___childMarkdownRemark___wordCount___paragraphs' |
  'body___childMarkdownRemark___wordCount___sentences' |
  'body___childMarkdownRemark___wordCount___words' |
  'body___childMarkdownRemark___parent___id' |
  'body___childMarkdownRemark___parent___children' |
  'body___childMarkdownRemark___children' |
  'body___childMarkdownRemark___children___id' |
  'body___childMarkdownRemark___children___children' |
  'body___childMarkdownRemark___internal___content' |
  'body___childMarkdownRemark___internal___contentDigest' |
  'body___childMarkdownRemark___internal___description' |
  'body___childMarkdownRemark___internal___fieldOwners' |
  'body___childMarkdownRemark___internal___ignoreType' |
  'body___childMarkdownRemark___internal___mediaType' |
  'body___childMarkdownRemark___internal___owner' |
  'body___childMarkdownRemark___internal___type' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'blog' |
  'blog___id' |
  'blog___parent___id' |
  'blog___parent___parent___id' |
  'blog___parent___parent___children' |
  'blog___parent___children' |
  'blog___parent___children___id' |
  'blog___parent___children___children' |
  'blog___parent___internal___content' |
  'blog___parent___internal___contentDigest' |
  'blog___parent___internal___description' |
  'blog___parent___internal___fieldOwners' |
  'blog___parent___internal___ignoreType' |
  'blog___parent___internal___mediaType' |
  'blog___parent___internal___owner' |
  'blog___parent___internal___type' |
  'blog___children' |
  'blog___children___id' |
  'blog___children___parent___id' |
  'blog___children___parent___children' |
  'blog___children___children' |
  'blog___children___children___id' |
  'blog___children___children___children' |
  'blog___children___internal___content' |
  'blog___children___internal___contentDigest' |
  'blog___children___internal___description' |
  'blog___children___internal___fieldOwners' |
  'blog___children___internal___ignoreType' |
  'blog___children___internal___mediaType' |
  'blog___children___internal___owner' |
  'blog___children___internal___type' |
  'blog___internal___content' |
  'blog___internal___contentDigest' |
  'blog___internal___description' |
  'blog___internal___fieldOwners' |
  'blog___internal___ignoreType' |
  'blog___internal___mediaType' |
  'blog___internal___owner' |
  'blog___internal___type' |
  'blog___title' |
  'blog___slug' |
  'blog___tags' |
  'blog___coverImage___id' |
  'blog___coverImage___parent___id' |
  'blog___coverImage___parent___children' |
  'blog___coverImage___children' |
  'blog___coverImage___children___id' |
  'blog___coverImage___children___children' |
  'blog___coverImage___internal___content' |
  'blog___coverImage___internal___contentDigest' |
  'blog___coverImage___internal___description' |
  'blog___coverImage___internal___fieldOwners' |
  'blog___coverImage___internal___ignoreType' |
  'blog___coverImage___internal___mediaType' |
  'blog___coverImage___internal___owner' |
  'blog___coverImage___internal___type' |
  'blog___coverImage___contentful_id' |
  'blog___coverImage___file___url' |
  'blog___coverImage___file___fileName' |
  'blog___coverImage___file___contentType' |
  'blog___coverImage___title' |
  'blog___coverImage___description' |
  'blog___coverImage___node_locale' |
  'blog___coverImage___fixed___base64' |
  'blog___coverImage___fixed___tracedSVG' |
  'blog___coverImage___fixed___aspectRatio' |
  'blog___coverImage___fixed___width' |
  'blog___coverImage___fixed___height' |
  'blog___coverImage___fixed___src' |
  'blog___coverImage___fixed___srcSet' |
  'blog___coverImage___fixed___srcWebp' |
  'blog___coverImage___fixed___srcSetWebp' |
  'blog___coverImage___resolutions___base64' |
  'blog___coverImage___resolutions___tracedSVG' |
  'blog___coverImage___resolutions___aspectRatio' |
  'blog___coverImage___resolutions___width' |
  'blog___coverImage___resolutions___height' |
  'blog___coverImage___resolutions___src' |
  'blog___coverImage___resolutions___srcSet' |
  'blog___coverImage___resolutions___srcWebp' |
  'blog___coverImage___resolutions___srcSetWebp' |
  'blog___coverImage___fluid___base64' |
  'blog___coverImage___fluid___tracedSVG' |
  'blog___coverImage___fluid___aspectRatio' |
  'blog___coverImage___fluid___src' |
  'blog___coverImage___fluid___srcSet' |
  'blog___coverImage___fluid___srcWebp' |
  'blog___coverImage___fluid___srcSetWebp' |
  'blog___coverImage___fluid___sizes' |
  'blog___coverImage___sizes___base64' |
  'blog___coverImage___sizes___tracedSVG' |
  'blog___coverImage___sizes___aspectRatio' |
  'blog___coverImage___sizes___src' |
  'blog___coverImage___sizes___srcSet' |
  'blog___coverImage___sizes___srcWebp' |
  'blog___coverImage___sizes___srcSetWebp' |
  'blog___coverImage___sizes___sizes' |
  'blog___coverImage___resize___base64' |
  'blog___coverImage___resize___tracedSVG' |
  'blog___coverImage___resize___src' |
  'blog___coverImage___resize___width' |
  'blog___coverImage___resize___height' |
  'blog___coverImage___resize___aspectRatio' |
  'blog___relatedPosts' |
  'blog___relatedPosts___id' |
  'blog___relatedPosts___parent___id' |
  'blog___relatedPosts___parent___children' |
  'blog___relatedPosts___children' |
  'blog___relatedPosts___children___id' |
  'blog___relatedPosts___children___children' |
  'blog___relatedPosts___internal___content' |
  'blog___relatedPosts___internal___contentDigest' |
  'blog___relatedPosts___internal___description' |
  'blog___relatedPosts___internal___fieldOwners' |
  'blog___relatedPosts___internal___ignoreType' |
  'blog___relatedPosts___internal___mediaType' |
  'blog___relatedPosts___internal___owner' |
  'blog___relatedPosts___internal___type' |
  'blog___relatedPosts___title' |
  'blog___relatedPosts___slug' |
  'blog___relatedPosts___tags' |
  'blog___relatedPosts___coverImage___id' |
  'blog___relatedPosts___coverImage___children' |
  'blog___relatedPosts___coverImage___contentful_id' |
  'blog___relatedPosts___coverImage___title' |
  'blog___relatedPosts___coverImage___description' |
  'blog___relatedPosts___coverImage___node_locale' |
  'blog___relatedPosts___relatedPosts' |
  'blog___relatedPosts___relatedPosts___id' |
  'blog___relatedPosts___relatedPosts___children' |
  'blog___relatedPosts___relatedPosts___title' |
  'blog___relatedPosts___relatedPosts___slug' |
  'blog___relatedPosts___relatedPosts___tags' |
  'blog___relatedPosts___relatedPosts___relatedPosts' |
  'blog___relatedPosts___relatedPosts___spaceId' |
  'blog___relatedPosts___relatedPosts___contentful_id' |
  'blog___relatedPosts___relatedPosts___createdAt' |
  'blog___relatedPosts___relatedPosts___updatedAt' |
  'blog___relatedPosts___relatedPosts___node_locale' |
  'blog___relatedPosts___relatedPosts___blog' |
  'blog___relatedPosts___description___id' |
  'blog___relatedPosts___description___children' |
  'blog___relatedPosts___description___description' |
  'blog___relatedPosts___body___id' |
  'blog___relatedPosts___body___children' |
  'blog___relatedPosts___body___body' |
  'blog___relatedPosts___spaceId' |
  'blog___relatedPosts___contentful_id' |
  'blog___relatedPosts___createdAt' |
  'blog___relatedPosts___updatedAt' |
  'blog___relatedPosts___sys___revision' |
  'blog___relatedPosts___node_locale' |
  'blog___relatedPosts___blog' |
  'blog___relatedPosts___blog___id' |
  'blog___relatedPosts___blog___children' |
  'blog___relatedPosts___blog___title' |
  'blog___relatedPosts___blog___slug' |
  'blog___relatedPosts___blog___tags' |
  'blog___relatedPosts___blog___relatedPosts' |
  'blog___relatedPosts___blog___spaceId' |
  'blog___relatedPosts___blog___contentful_id' |
  'blog___relatedPosts___blog___createdAt' |
  'blog___relatedPosts___blog___updatedAt' |
  'blog___relatedPosts___blog___node_locale' |
  'blog___relatedPosts___blog___blog' |
  'blog___relatedPosts___childContentfulBlogDescriptionTextNode___id' |
  'blog___relatedPosts___childContentfulBlogDescriptionTextNode___children' |
  'blog___relatedPosts___childContentfulBlogDescriptionTextNode___description' |
  'blog___relatedPosts___childContentfulBlogBodyTextNode___id' |
  'blog___relatedPosts___childContentfulBlogBodyTextNode___children' |
  'blog___relatedPosts___childContentfulBlogBodyTextNode___body' |
  'blog___description___id' |
  'blog___description___parent___id' |
  'blog___description___parent___children' |
  'blog___description___children' |
  'blog___description___children___id' |
  'blog___description___children___children' |
  'blog___description___internal___content' |
  'blog___description___internal___contentDigest' |
  'blog___description___internal___description' |
  'blog___description___internal___fieldOwners' |
  'blog___description___internal___ignoreType' |
  'blog___description___internal___mediaType' |
  'blog___description___internal___owner' |
  'blog___description___internal___type' |
  'blog___description___description' |
  'blog___description___childMarkdownRemark___id' |
  'blog___description___childMarkdownRemark___excerpt' |
  'blog___description___childMarkdownRemark___rawMarkdownBody' |
  'blog___description___childMarkdownRemark___html' |
  'blog___description___childMarkdownRemark___htmlAst' |
  'blog___description___childMarkdownRemark___excerptAst' |
  'blog___description___childMarkdownRemark___headings' |
  'blog___description___childMarkdownRemark___timeToRead' |
  'blog___description___childMarkdownRemark___tableOfContents' |
  'blog___description___childMarkdownRemark___children' |
  'blog___body___id' |
  'blog___body___parent___id' |
  'blog___body___parent___children' |
  'blog___body___children' |
  'blog___body___children___id' |
  'blog___body___children___children' |
  'blog___body___internal___content' |
  'blog___body___internal___contentDigest' |
  'blog___body___internal___description' |
  'blog___body___internal___fieldOwners' |
  'blog___body___internal___ignoreType' |
  'blog___body___internal___mediaType' |
  'blog___body___internal___owner' |
  'blog___body___internal___type' |
  'blog___body___body' |
  'blog___body___childMarkdownRemark___id' |
  'blog___body___childMarkdownRemark___excerpt' |
  'blog___body___childMarkdownRemark___rawMarkdownBody' |
  'blog___body___childMarkdownRemark___html' |
  'blog___body___childMarkdownRemark___htmlAst' |
  'blog___body___childMarkdownRemark___excerptAst' |
  'blog___body___childMarkdownRemark___headings' |
  'blog___body___childMarkdownRemark___timeToRead' |
  'blog___body___childMarkdownRemark___tableOfContents' |
  'blog___body___childMarkdownRemark___children' |
  'blog___spaceId' |
  'blog___contentful_id' |
  'blog___createdAt' |
  'blog___updatedAt' |
  'blog___sys___revision' |
  'blog___node_locale' |
  'blog___blog' |
  'blog___blog___id' |
  'blog___blog___parent___id' |
  'blog___blog___parent___children' |
  'blog___blog___children' |
  'blog___blog___children___id' |
  'blog___blog___children___children' |
  'blog___blog___internal___content' |
  'blog___blog___internal___contentDigest' |
  'blog___blog___internal___description' |
  'blog___blog___internal___fieldOwners' |
  'blog___blog___internal___ignoreType' |
  'blog___blog___internal___mediaType' |
  'blog___blog___internal___owner' |
  'blog___blog___internal___type' |
  'blog___blog___title' |
  'blog___blog___slug' |
  'blog___blog___tags' |
  'blog___blog___coverImage___id' |
  'blog___blog___coverImage___children' |
  'blog___blog___coverImage___contentful_id' |
  'blog___blog___coverImage___title' |
  'blog___blog___coverImage___description' |
  'blog___blog___coverImage___node_locale' |
  'blog___blog___relatedPosts' |
  'blog___blog___relatedPosts___id' |
  'blog___blog___relatedPosts___children' |
  'blog___blog___relatedPosts___title' |
  'blog___blog___relatedPosts___slug' |
  'blog___blog___relatedPosts___tags' |
  'blog___blog___relatedPosts___relatedPosts' |
  'blog___blog___relatedPosts___spaceId' |
  'blog___blog___relatedPosts___contentful_id' |
  'blog___blog___relatedPosts___createdAt' |
  'blog___blog___relatedPosts___updatedAt' |
  'blog___blog___relatedPosts___node_locale' |
  'blog___blog___relatedPosts___blog' |
  'blog___blog___description___id' |
  'blog___blog___description___children' |
  'blog___blog___description___description' |
  'blog___blog___body___id' |
  'blog___blog___body___children' |
  'blog___blog___body___body' |
  'blog___blog___spaceId' |
  'blog___blog___contentful_id' |
  'blog___blog___createdAt' |
  'blog___blog___updatedAt' |
  'blog___blog___sys___revision' |
  'blog___blog___node_locale' |
  'blog___blog___blog' |
  'blog___blog___blog___id' |
  'blog___blog___blog___children' |
  'blog___blog___blog___title' |
  'blog___blog___blog___slug' |
  'blog___blog___blog___tags' |
  'blog___blog___blog___relatedPosts' |
  'blog___blog___blog___spaceId' |
  'blog___blog___blog___contentful_id' |
  'blog___blog___blog___createdAt' |
  'blog___blog___blog___updatedAt' |
  'blog___blog___blog___node_locale' |
  'blog___blog___blog___blog' |
  'blog___blog___childContentfulBlogDescriptionTextNode___id' |
  'blog___blog___childContentfulBlogDescriptionTextNode___children' |
  'blog___blog___childContentfulBlogDescriptionTextNode___description' |
  'blog___blog___childContentfulBlogBodyTextNode___id' |
  'blog___blog___childContentfulBlogBodyTextNode___children' |
  'blog___blog___childContentfulBlogBodyTextNode___body' |
  'blog___childContentfulBlogDescriptionTextNode___id' |
  'blog___childContentfulBlogDescriptionTextNode___parent___id' |
  'blog___childContentfulBlogDescriptionTextNode___parent___children' |
  'blog___childContentfulBlogDescriptionTextNode___children' |
  'blog___childContentfulBlogDescriptionTextNode___children___id' |
  'blog___childContentfulBlogDescriptionTextNode___children___children' |
  'blog___childContentfulBlogDescriptionTextNode___internal___content' |
  'blog___childContentfulBlogDescriptionTextNode___internal___contentDigest' |
  'blog___childContentfulBlogDescriptionTextNode___internal___description' |
  'blog___childContentfulBlogDescriptionTextNode___internal___fieldOwners' |
  'blog___childContentfulBlogDescriptionTextNode___internal___ignoreType' |
  'blog___childContentfulBlogDescriptionTextNode___internal___mediaType' |
  'blog___childContentfulBlogDescriptionTextNode___internal___owner' |
  'blog___childContentfulBlogDescriptionTextNode___internal___type' |
  'blog___childContentfulBlogDescriptionTextNode___description' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___id' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___excerpt' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___html' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___headings' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'blog___childContentfulBlogDescriptionTextNode___childMarkdownRemark___children' |
  'blog___childContentfulBlogBodyTextNode___id' |
  'blog___childContentfulBlogBodyTextNode___parent___id' |
  'blog___childContentfulBlogBodyTextNode___parent___children' |
  'blog___childContentfulBlogBodyTextNode___children' |
  'blog___childContentfulBlogBodyTextNode___children___id' |
  'blog___childContentfulBlogBodyTextNode___children___children' |
  'blog___childContentfulBlogBodyTextNode___internal___content' |
  'blog___childContentfulBlogBodyTextNode___internal___contentDigest' |
  'blog___childContentfulBlogBodyTextNode___internal___description' |
  'blog___childContentfulBlogBodyTextNode___internal___fieldOwners' |
  'blog___childContentfulBlogBodyTextNode___internal___ignoreType' |
  'blog___childContentfulBlogBodyTextNode___internal___mediaType' |
  'blog___childContentfulBlogBodyTextNode___internal___owner' |
  'blog___childContentfulBlogBodyTextNode___internal___type' |
  'blog___childContentfulBlogBodyTextNode___body' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___id' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___excerpt' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___html' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___htmlAst' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___excerptAst' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___headings' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___timeToRead' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___tableOfContents' |
  'blog___childContentfulBlogBodyTextNode___childMarkdownRemark___children' |
  'childContentfulBlogDescriptionTextNode___id' |
  'childContentfulBlogDescriptionTextNode___parent___id' |
  'childContentfulBlogDescriptionTextNode___parent___parent___id' |
  'childContentfulBlogDescriptionTextNode___parent___parent___children' |
  'childContentfulBlogDescriptionTextNode___parent___children' |
  'childContentfulBlogDescriptionTextNode___parent___children___id' |
  'childContentfulBlogDescriptionTextNode___parent___children___children' |
  'childContentfulBlogDescriptionTextNode___parent___internal___content' |
  'childContentfulBlogDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlogDescriptionTextNode___parent___internal___description' |
  'childContentfulBlogDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlogDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlogDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlogDescriptionTextNode___parent___internal___type' |
  'childContentfulBlogDescriptionTextNode___children' |
  'childContentfulBlogDescriptionTextNode___children___id' |
  'childContentfulBlogDescriptionTextNode___children___parent___id' |
  'childContentfulBlogDescriptionTextNode___children___parent___children' |
  'childContentfulBlogDescriptionTextNode___children___children' |
  'childContentfulBlogDescriptionTextNode___children___children___id' |
  'childContentfulBlogDescriptionTextNode___children___children___children' |
  'childContentfulBlogDescriptionTextNode___children___internal___content' |
  'childContentfulBlogDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlogDescriptionTextNode___children___internal___description' |
  'childContentfulBlogDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlogDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlogDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlogDescriptionTextNode___children___internal___owner' |
  'childContentfulBlogDescriptionTextNode___children___internal___type' |
  'childContentfulBlogDescriptionTextNode___internal___content' |
  'childContentfulBlogDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlogDescriptionTextNode___internal___description' |
  'childContentfulBlogDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlogDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlogDescriptionTextNode___internal___mediaType' |
  'childContentfulBlogDescriptionTextNode___internal___owner' |
  'childContentfulBlogDescriptionTextNode___internal___type' |
  'childContentfulBlogDescriptionTextNode___description' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___id' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___excerpt' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___html' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___headings' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___headings___value' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___parent___id' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___parent___children' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___children' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___children___id' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___children___children' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___content' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___description' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulBlogDescriptionTextNode___childMarkdownRemark___internal___type' |
  'childContentfulBlogBodyTextNode___id' |
  'childContentfulBlogBodyTextNode___parent___id' |
  'childContentfulBlogBodyTextNode___parent___parent___id' |
  'childContentfulBlogBodyTextNode___parent___parent___children' |
  'childContentfulBlogBodyTextNode___parent___children' |
  'childContentfulBlogBodyTextNode___parent___children___id' |
  'childContentfulBlogBodyTextNode___parent___children___children' |
  'childContentfulBlogBodyTextNode___parent___internal___content' |
  'childContentfulBlogBodyTextNode___parent___internal___contentDigest' |
  'childContentfulBlogBodyTextNode___parent___internal___description' |
  'childContentfulBlogBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogBodyTextNode___parent___internal___ignoreType' |
  'childContentfulBlogBodyTextNode___parent___internal___mediaType' |
  'childContentfulBlogBodyTextNode___parent___internal___owner' |
  'childContentfulBlogBodyTextNode___parent___internal___type' |
  'childContentfulBlogBodyTextNode___children' |
  'childContentfulBlogBodyTextNode___children___id' |
  'childContentfulBlogBodyTextNode___children___parent___id' |
  'childContentfulBlogBodyTextNode___children___parent___children' |
  'childContentfulBlogBodyTextNode___children___children' |
  'childContentfulBlogBodyTextNode___children___children___id' |
  'childContentfulBlogBodyTextNode___children___children___children' |
  'childContentfulBlogBodyTextNode___children___internal___content' |
  'childContentfulBlogBodyTextNode___children___internal___contentDigest' |
  'childContentfulBlogBodyTextNode___children___internal___description' |
  'childContentfulBlogBodyTextNode___children___internal___fieldOwners' |
  'childContentfulBlogBodyTextNode___children___internal___ignoreType' |
  'childContentfulBlogBodyTextNode___children___internal___mediaType' |
  'childContentfulBlogBodyTextNode___children___internal___owner' |
  'childContentfulBlogBodyTextNode___children___internal___type' |
  'childContentfulBlogBodyTextNode___internal___content' |
  'childContentfulBlogBodyTextNode___internal___contentDigest' |
  'childContentfulBlogBodyTextNode___internal___description' |
  'childContentfulBlogBodyTextNode___internal___fieldOwners' |
  'childContentfulBlogBodyTextNode___internal___ignoreType' |
  'childContentfulBlogBodyTextNode___internal___mediaType' |
  'childContentfulBlogBodyTextNode___internal___owner' |
  'childContentfulBlogBodyTextNode___internal___type' |
  'childContentfulBlogBodyTextNode___body' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___id' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___frontmatter___title' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___excerpt' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___rawMarkdownBody' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___html' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___htmlAst' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___excerptAst' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___headings' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___headings___value' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___headings___depth' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___timeToRead' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___tableOfContents' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___wordCount___paragraphs' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___wordCount___sentences' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___wordCount___words' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___parent___id' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___parent___children' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___children' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___children___id' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___children___children' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___content' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___contentDigest' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___description' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___fieldOwners' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___ignoreType' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___mediaType' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___owner' |
  'childContentfulBlogBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulBlogFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  coverImage?: Maybe<ContentfulAssetFilterInput>,
  relatedPosts?: Maybe<ContentfulBlogFilterListInput>,
  description?: Maybe<ContentfulBlogDescriptionTextNodeFilterInput>,
  body?: Maybe<ContentfulBlogBodyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  blog?: Maybe<ContentfulBlogFilterListInput>,
  childContentfulBlogDescriptionTextNode?: Maybe<ContentfulBlogDescriptionTextNodeFilterInput>,
  childContentfulBlogBodyTextNode?: Maybe<ContentfulBlogBodyTextNodeFilterInput>,
};

export type ContentfulBlogFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogFilterInput>,
};

export type ContentfulBlogGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulBlogEdge>,
  nodes: Array<ContentfulBlog>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulBlogSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulBlogSys = {
  revision?: Maybe<Scalars['Int']>,
  contentType?: Maybe<ContentfulBlogSysContentType>,
};

export type ContentfulBlogSysContentType = {
  sys?: Maybe<ContentfulBlogSysContentTypeSys>,
};

export type ContentfulBlogSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogSysContentTypeSysFilterInput>,
};

export type ContentfulBlogSysContentTypeSys = {
  type?: Maybe<Scalars['String']>,
  linkType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  contentful_id?: Maybe<Scalars['String']>,
};

export type ContentfulBlogSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>,
  linkType?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulBlogSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>,
  contentType?: Maybe<ContentfulBlogSysContentTypeFilterInput>,
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  displayField?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ContentfulContentTypeGroupConnection>,
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ContentfulContentTypeFieldsEnum
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>,
  node: ContentfulContentType,
  previous?: Maybe<ContentfulContentType>,
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ContentfulContentTypeEdge>,
  nodes: Array<ContentfulContentType>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  src?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /** 
 * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
 */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'excerpt' |
  'rawMarkdownBody' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  contentfulAsset?: Maybe<ContentfulAsset>,
  allContentfulAsset: ContentfulAssetConnection,
  contentfulBlogBodyTextNode?: Maybe<ContentfulBlogBodyTextNode>,
  allContentfulBlogBodyTextNode: ContentfulBlogBodyTextNodeConnection,
  contentfulBlogDescriptionTextNode?: Maybe<ContentfulBlogDescriptionTextNode>,
  allContentfulBlogDescriptionTextNode: ContentfulBlogDescriptionTextNodeConnection,
  contentfulBlog?: Maybe<ContentfulBlog>,
  allContentfulBlog: ContentfulBlogConnection,
  contentfulContentType?: Maybe<ContentfulContentType>,
  allContentfulContentType: ContentfulContentTypeConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<ContentfulAssetFileFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  fixed?: Maybe<ContentfulFixedFilterInput>,
  resolutions?: Maybe<ContentfulResolutionsFilterInput>,
  fluid?: Maybe<ContentfulFluidFilterInput>,
  sizes?: Maybe<ContentfulSizesFilterInput>,
  resize?: Maybe<ContentfulResizeFilterInput>
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>,
  sort?: Maybe<ContentfulAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllContentfulBlogBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogBodyTextNodeFilterInput>,
  sort?: Maybe<ContentfulBlogBodyTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllContentfulBlogDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogDescriptionTextNodeFilterInput>,
  sort?: Maybe<ContentfulBlogDescriptionTextNodeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulBlogArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  coverImage?: Maybe<ContentfulAssetFilterInput>,
  relatedPosts?: Maybe<ContentfulBlogFilterListInput>,
  description?: Maybe<ContentfulBlogDescriptionTextNodeFilterInput>,
  body?: Maybe<ContentfulBlogBodyTextNodeFilterInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  contentful_id?: Maybe<StringQueryOperatorInput>,
  createdAt?: Maybe<DateQueryOperatorInput>,
  updatedAt?: Maybe<DateQueryOperatorInput>,
  sys?: Maybe<ContentfulBlogSysFilterInput>,
  node_locale?: Maybe<StringQueryOperatorInput>,
  blog?: Maybe<ContentfulBlogFilterListInput>,
  childContentfulBlogDescriptionTextNode?: Maybe<ContentfulBlogDescriptionTextNodeFilterInput>,
  childContentfulBlogBodyTextNode?: Maybe<ContentfulBlogBodyTextNodeFilterInput>
};


export type QueryAllContentfulBlogArgs = {
  filter?: Maybe<ContentfulBlogFilterInput>,
  sort?: Maybe<ContentfulBlogSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  displayField?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>,
  sort?: Maybe<ContentfulContentTypeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___author' |
  'siteMetadata___siteUrl' |
  'polyfill' |
  'pathPrefix' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  path: Scalars['String'],
  component: Scalars['String'],
  internalComponentName: Scalars['String'],
  componentChunkName: Scalars['String'],
  matchPath?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  article?: Maybe<SitePageContextArticle>,
  next?: Maybe<SitePageContextNext>,
  previous?: Maybe<SitePageContextPrevious>,
};

export type SitePageContextArticle = {
  title?: Maybe<Scalars['String']>,
  coverImage?: Maybe<SitePageContextArticleCoverImage>,
  updatedAt?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<SitePageContextArticleDescription>,
  slug?: Maybe<Scalars['String']>,
  body?: Maybe<SitePageContextArticleBody>,
  relatedPosts?: Maybe<Array<Maybe<SitePageContextArticleRelatedPosts>>>,
};

export type SitePageContextArticleBody = {
  body?: Maybe<Scalars['String']>,
  childMarkdownRemark?: Maybe<SitePageContextArticleBodyChildMarkdownRemark>,
};

export type SitePageContextArticleBodyChildMarkdownRemark = {
  html?: Maybe<Scalars['String']>,
  headings?: Maybe<Array<Maybe<SitePageContextArticleBodyChildMarkdownRemarkHeadings>>>,
};

export type SitePageContextArticleBodyChildMarkdownRemarkFilterInput = {
  html?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<SitePageContextArticleBodyChildMarkdownRemarkHeadingsFilterListInput>,
};

export type SitePageContextArticleBodyChildMarkdownRemarkHeadings = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type SitePageContextArticleBodyChildMarkdownRemarkHeadingsFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type SitePageContextArticleBodyChildMarkdownRemarkHeadingsFilterListInput = {
  elemMatch?: Maybe<SitePageContextArticleBodyChildMarkdownRemarkHeadingsFilterInput>,
};

export type SitePageContextArticleBodyFilterInput = {
  body?: Maybe<StringQueryOperatorInput>,
  childMarkdownRemark?: Maybe<SitePageContextArticleBodyChildMarkdownRemarkFilterInput>,
};

export type SitePageContextArticleCoverImage = {
  title?: Maybe<Scalars['String']>,
  file?: Maybe<SitePageContextArticleCoverImageFile>,
};

export type SitePageContextArticleCoverImageFile = {
  url?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleCoverImageFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleCoverImageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<SitePageContextArticleCoverImageFileFilterInput>,
};

export type SitePageContextArticleDescription = {
  description?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  coverImage?: Maybe<SitePageContextArticleCoverImageFilterInput>,
  updatedAt?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SitePageContextArticleDescriptionFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<SitePageContextArticleBodyFilterInput>,
  relatedPosts?: Maybe<SitePageContextArticleRelatedPostsFilterListInput>,
};

export type SitePageContextArticleRelatedPosts = {
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  coverImage?: Maybe<SitePageContextArticleRelatedPostsCoverImage>,
  description?: Maybe<SitePageContextArticleRelatedPostsDescription>,
};

export type SitePageContextArticleRelatedPostsCoverImage = {
  title?: Maybe<Scalars['String']>,
  file?: Maybe<SitePageContextArticleRelatedPostsCoverImageFile>,
};

export type SitePageContextArticleRelatedPostsCoverImageFile = {
  url?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleRelatedPostsCoverImageFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleRelatedPostsCoverImageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<SitePageContextArticleRelatedPostsCoverImageFileFilterInput>,
};

export type SitePageContextArticleRelatedPostsDescription = {
  description?: Maybe<Scalars['String']>,
};

export type SitePageContextArticleRelatedPostsDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextArticleRelatedPostsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  updatedAt?: Maybe<StringQueryOperatorInput>,
  coverImage?: Maybe<SitePageContextArticleRelatedPostsCoverImageFilterInput>,
  description?: Maybe<SitePageContextArticleRelatedPostsDescriptionFilterInput>,
};

export type SitePageContextArticleRelatedPostsFilterListInput = {
  elemMatch?: Maybe<SitePageContextArticleRelatedPostsFilterInput>,
};

export type SitePageContextFilterInput = {
  article?: Maybe<SitePageContextArticleFilterInput>,
  next?: Maybe<SitePageContextNextFilterInput>,
  previous?: Maybe<SitePageContextPreviousFilterInput>,
};

export type SitePageContextNext = {
  title?: Maybe<Scalars['String']>,
  coverImage?: Maybe<SitePageContextNextCoverImage>,
  updatedAt?: Maybe<Scalars['String']>,
  description?: Maybe<SitePageContextNextDescription>,
  slug?: Maybe<Scalars['String']>,
};

export type SitePageContextNextCoverImage = {
  title?: Maybe<Scalars['String']>,
  file?: Maybe<SitePageContextNextCoverImageFile>,
};

export type SitePageContextNextCoverImageFile = {
  url?: Maybe<Scalars['String']>,
};

export type SitePageContextNextCoverImageFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextNextCoverImageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<SitePageContextNextCoverImageFileFilterInput>,
};

export type SitePageContextNextDescription = {
  description?: Maybe<Scalars['String']>,
};

export type SitePageContextNextDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextNextFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  coverImage?: Maybe<SitePageContextNextCoverImageFilterInput>,
  updatedAt?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SitePageContextNextDescriptionFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPrevious = {
  title?: Maybe<Scalars['String']>,
  coverImage?: Maybe<SitePageContextPreviousCoverImage>,
  updatedAt?: Maybe<Scalars['String']>,
  description?: Maybe<SitePageContextPreviousDescription>,
  slug?: Maybe<Scalars['String']>,
};

export type SitePageContextPreviousCoverImage = {
  title?: Maybe<Scalars['String']>,
  file?: Maybe<SitePageContextPreviousCoverImageFile>,
};

export type SitePageContextPreviousCoverImageFile = {
  url?: Maybe<Scalars['String']>,
};

export type SitePageContextPreviousCoverImageFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPreviousCoverImageFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  file?: Maybe<SitePageContextPreviousCoverImageFileFilterInput>,
};

export type SitePageContextPreviousDescription = {
  description?: Maybe<Scalars['String']>,
};

export type SitePageContextPreviousDescriptionFilterInput = {
  description?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPreviousFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  coverImage?: Maybe<SitePageContextPreviousCoverImageFilterInput>,
  updatedAt?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<SitePageContextPreviousDescriptionFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___article___title' |
  'context___article___coverImage___title' |
  'context___article___updatedAt' |
  'context___article___tags' |
  'context___article___description___description' |
  'context___article___slug' |
  'context___article___body___body' |
  'context___article___relatedPosts' |
  'context___article___relatedPosts___title' |
  'context___article___relatedPosts___updatedAt' |
  'context___next___title' |
  'context___next___coverImage___title' |
  'context___next___updatedAt' |
  'context___next___description___description' |
  'context___next___slug' |
  'context___previous___title' |
  'context___previous___coverImage___title' |
  'context___previous___updatedAt' |
  'context___previous___description___description' |
  'context___previous___slug' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___plugins' |
  'pluginCreator___pluginOptions___plugins___resolve' |
  'pluginCreator___pluginOptions___plugins___id' |
  'pluginCreator___pluginOptions___plugins___name' |
  'pluginCreator___pluginOptions___plugins___version' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___host' |
  'pluginCreator___pluginOptions___sitemap' |
  'pluginCreator___pluginOptions___policy' |
  'pluginCreator___pluginOptions___policy___userAgent' |
  'pluginCreator___pluginOptions___policy___allow' |
  'pluginCreator___pluginOptions___output' |
  'pluginCreator___pluginOptions___commonmark' |
  'pluginCreator___pluginOptions___footnotes' |
  'pluginCreator___pluginOptions___pedantic' |
  'pluginCreator___pluginOptions___gfm' |
  'pluginCreator___pluginOptions___classPrefix' |
  'pluginCreator___pluginOptions___showLineNumbers' |
  'pluginCreator___pluginOptions___noInlineHighlight' |
  'pluginCreator___pluginOptions___languageExtensions' |
  'pluginCreator___pluginOptions___languageExtensions___language' |
  'pluginCreator___pluginOptions___languageExtensions___extend' |
  'pluginCreator___pluginOptions___prompt___user' |
  'pluginCreator___pluginOptions___prompt___host' |
  'pluginCreator___pluginOptions___prompt___global' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___plugins' |
  'pluginOptions___plugins___resolve' |
  'pluginOptions___plugins___id' |
  'pluginOptions___plugins___name' |
  'pluginOptions___plugins___version' |
  'pluginOptions___plugins___pluginOptions___classPrefix' |
  'pluginOptions___plugins___pluginOptions___showLineNumbers' |
  'pluginOptions___plugins___pluginOptions___noInlineHighlight' |
  'pluginOptions___plugins___pluginOptions___languageExtensions' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___fileName' |
  'pluginOptions___host' |
  'pluginOptions___sitemap' |
  'pluginOptions___policy' |
  'pluginOptions___policy___userAgent' |
  'pluginOptions___policy___allow' |
  'pluginOptions___output' |
  'pluginOptions___commonmark' |
  'pluginOptions___footnotes' |
  'pluginOptions___pedantic' |
  'pluginOptions___gfm' |
  'pluginOptions___classPrefix' |
  'pluginOptions___showLineNumbers' |
  'pluginOptions___noInlineHighlight' |
  'pluginOptions___languageExtensions' |
  'pluginOptions___languageExtensions___language' |
  'pluginOptions___languageExtensions___extend' |
  'pluginOptions___prompt___user' |
  'pluginOptions___prompt___host' |
  'pluginOptions___prompt___global' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  spaceId?: Maybe<Scalars['String']>,
  accessToken?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  sitemap?: Maybe<Scalars['String']>,
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsPolicy>>>,
  output?: Maybe<Scalars['String']>,
  commonmark?: Maybe<Scalars['Boolean']>,
  footnotes?: Maybe<Scalars['Boolean']>,
  pedantic?: Maybe<Scalars['Boolean']>,
  gfm?: Maybe<Scalars['Boolean']>,
  classPrefix?: Maybe<Scalars['String']>,
  showLineNumbers?: Maybe<Scalars['Boolean']>,
  noInlineHighlight?: Maybe<Scalars['Boolean']>,
  languageExtensions?: Maybe<Array<Maybe<SitePluginPluginOptionsLanguageExtensions>>>,
  prompt?: Maybe<SitePluginPluginOptionsPrompt>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  spaceId?: Maybe<StringQueryOperatorInput>,
  accessToken?: Maybe<StringQueryOperatorInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  sitemap?: Maybe<StringQueryOperatorInput>,
  policy?: Maybe<SitePluginPluginOptionsPolicyFilterListInput>,
  output?: Maybe<StringQueryOperatorInput>,
  commonmark?: Maybe<BooleanQueryOperatorInput>,
  footnotes?: Maybe<BooleanQueryOperatorInput>,
  pedantic?: Maybe<BooleanQueryOperatorInput>,
  gfm?: Maybe<BooleanQueryOperatorInput>,
  classPrefix?: Maybe<StringQueryOperatorInput>,
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>,
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>,
  languageExtensions?: Maybe<SitePluginPluginOptionsLanguageExtensionsFilterListInput>,
  prompt?: Maybe<SitePluginPluginOptionsPromptFilterInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsLanguageExtensions = {
  language?: Maybe<Scalars['String']>,
  extend?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsLanguageExtensionsFilterInput = {
  language?: Maybe<StringQueryOperatorInput>,
  extend?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsLanguageExtensionsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsLanguageExtensionsFilterInput>,
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  classPrefix?: Maybe<Scalars['String']>,
  showLineNumbers?: Maybe<Scalars['Boolean']>,
  noInlineHighlight?: Maybe<Scalars['Boolean']>,
  languageExtensions?: Maybe<Array<Maybe<SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensions>>>,
  prompt?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPrompt>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  classPrefix?: Maybe<StringQueryOperatorInput>,
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>,
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>,
  languageExtensions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterListInput>,
  prompt?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensions = {
  language?: Maybe<Scalars['String']>,
  extend?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterInput = {
  language?: Maybe<StringQueryOperatorInput>,
  extend?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsLanguageExtensionsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsPrompt = {
  user?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  global?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput = {
  user?: Maybe<StringQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  global?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPolicy = {
  userAgent?: Maybe<Scalars['String']>,
  allow?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>,
  allow?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPolicyFilterInput>,
};

export type SitePluginPluginOptionsPrompt = {
  user?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  global?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsPromptFilterInput = {
  user?: Maybe<StringQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  global?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_6_QueryVariables = {};


export type Unnamed_6_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_7_QueryVariables = {};


export type Unnamed_7_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type AllArticlesQueryVariables = {};


export type AllArticlesQuery = { allContentfulBlog: { edges: Array<{ node: (
        Pick<ContentfulBlog, 'title' | 'updatedAt' | 'slug'>
        & { coverImage: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )>, description: Maybe<Pick<ContentfulBlogDescriptionTextNode, 'description'>> }
      ) }> } };

export type RecentArticlesQueryVariables = {};


export type RecentArticlesQuery = { allContentfulBlog: { edges: Array<{ node: (
        Pick<ContentfulBlog, 'title' | 'updatedAt' | 'slug'>
        & { coverImage: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )>, description: Maybe<Pick<ContentfulBlogDescriptionTextNode, 'description'>> }
      ) }> } };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
