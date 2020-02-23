import React from "react"
import { Row, Col, Icon } from 'antd';
import { Link } from "gatsby";
import LogoInvertImage from "./images/logo-invert";

const footerSections = [
    {
        title: 'サイトマップ',
        icon: 'global',
        pages: [
            { title: '記事一覧', link: '/articles' },
            { title: 'プロダクト', link: '/product' },
        ]
    },
    {
        title: 'About Me',
        icon: 'smile',
        pages: [
            { title: 'Twitter', link: '/', outerLink: 'https://twitter.com/tom__yam' },
            { title: 'GitHub', link: '/', outerLink: 'https://github.com/tom-yam' },
        ]
    },
    {
        title: 'ヘルプ',
        icon: 'question-circle',
        pages: [
            { title: 'お問い合わせ', link: '/contact' },
            { title: 'プライバシーポリシー', link: '/privacy' },
        ]
    },
]

const Footer = () => {
    var now = new Date();
    var thisYear = now.getFullYear();
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <div style={{ padding: '20px', maxWidth: '900px', width: "100%", margin: 'auto', position: 'relative', textAlign: 'center' }}>
                <Row style={{ padding: '20px', margin: 'auto', position: 'relative' }}>
                    {footerSections.map(section => (
                        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginBottom: '12px' }} key={section.title}>
                            <p style={{ fontSize: '16px', fontWeight: 500 }}>
                                <Icon type={section.icon} style={{ marginRight: '8px' }} />{section.title}
                            </p>
                            {section.pages.map(p => {
                                if (p.outerLink) {
                                    return (
                                        <a href={p.outerLink} key={p.title}>
                                            <p style={{ color: 'white' }}>{p.title}</p>
                                        </a>
                                    )
                                }
                                return (
                                    <Link to={p.link} key={p.title}>
                                        <p style={{ color: 'white' }}>{p.title}</p>
                                    </Link>
                                )
                            }
                            )}
                        </Col>
                    ))}
                </Row>
                <LogoInvertImage style={{ width: '140px', margin: '0 auto' }} />
                <div style={{ marginTop: '12px' }}>Copyright <Icon type="copyright" style={{ marginRight: '4px' }} />{thisYear} Tomoki Yamashita</div>
            </div>
        </div>
    )
}
export default Footer;