import * as React from "react"
import { ArticleContext } from "../../../../gatsby-node"
import { Icon, Row, Col } from "antd"
import CSS from 'csstype'
import { createArticleURL } from "../../..//utils/link-generator"
import { FacebookShareButton, TwitterShareButton, PocketShareButton } from 'react-share'

type Props = {
    pageContext: ArticleContext
}

const buttonShadowStyle: CSS.Properties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '2px 2px 4px #b4b8bf, -2px -2px 4px #ffffff',
    margin: '20px 0 0 auto',
    textAlign: 'center',
    fontSize: '22px',
    color: '#2f54eb',
    verticalAlign: 'middle'
}

const ShareButtons: React.FC<Props> = ({ pageContext }) => (
    <div style={{ position: "fixed", left: '0px', padding: '60px 0px 0px 20px', width: 'calc((100% - 900px) / 2)' }}>
        <Row gutter={16} style={{ textAlign: 'right' }}>
            <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                <TwitterShareButton
                    title={pageContext.article.title}
                    url={createArticleURL(pageContext.article.slug)}
                    style={{ display: 'block', margin: '0 0 0 auto' }}
                >
                    <div style={buttonShadowStyle}>
                        <Icon type="twitter" style={{ verticalAlign: 'middle' }} />
                    </div>
                </TwitterShareButton>

                <FacebookShareButton
                    quote={pageContext.article.title}
                    url={createArticleURL(pageContext.article.slug)}
                    style={{ display: 'block', margin: '0 0 0 auto' }}
                >
                    <div style={buttonShadowStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 172 172"
                            style={{ fill: '#000000', marginTop: '6px' }}>
                            <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                                style={{ mixBlendMode: "normal" }}>
                                <path
                                    d="M0,172v-172h172v172z"
                                    fill="none"
                                >
                                </path>
                                <g fill="#2f54eb">
                                    <path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,35.9265 26.4665,65.5965 60.9525,70.778v-51.78633h-17.73033v-18.84117h17.73033v-12.5345c0,-20.75467 10.11217,-29.8635 27.36233,-29.8635c8.26317,0 12.62767,0.60917 14.69883,0.88867v16.44033h-11.76767c-7.32433,0 -9.88283,6.9445 -9.88283,14.7705v10.2985h21.46417l-2.90967,18.84117h-18.54733v51.93683c34.9805,-4.73717 61.963,-34.65083 61.963,-70.9285c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </FacebookShareButton>


                <PocketShareButton
                    title={pageContext.article.title}
                    url={createArticleURL(pageContext.article.slug)}
                    style={{ display: 'block', margin: '0 0 0 auto' }}
                >
                    <div style={buttonShadowStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="22" height="22"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000", marginTop: '8px' }}>
                            <g
                                fill="none"
                                fill-rule="none"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                                style={{ mixBlendMode: "normal" }}>
                                <path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path>
                                <g fill="#2f54eb" fill-rule="evenodd"><path d="M86,154.8c-41.8175,0 -75.68,-33.54 -75.68,-74.96781v-47.75687c0,-6.30219 5.17344,-11.43531 11.55625,-11.43531h128.2475c6.38281,0 11.55625,5.13313 11.55625,11.43531v47.75687c0,41.42781 -33.8625,74.96781 -75.68,74.96781zM86,116.96c-2.39187,0 -4.75687,-0.645 -7.17562,-2.76812l-37.54438,-38.51188c-3.9775,-3.95062 -4.27312,-10.84406 -0.29562,-14.39156c3.99094,-3.95062 10.36031,-3.95062 13.94812,0l31.0675,30.38219l30.66438,-30.38219c3.99094,-3.95062 10.36031,-3.95062 13.94812,0c3.9775,3.93719 4.085,10.84406 0.1075,14.39156l-37.9475,38.51188c-1.89469,2.20375 -4.38062,2.76812 -6.7725,2.76812z"></path></g>
                            </g>
                        </svg>
                    </div>
                </PocketShareButton>
            </Col>
        </Row>
    </div>
)

export default ShareButtons