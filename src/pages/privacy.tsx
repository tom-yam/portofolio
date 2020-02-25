import React from "react"
import { Typography } from 'antd';
import CSS from 'csstype'
import PageLayout from "../components/layout/index"
import SEO from "../components/seo"

const { Title, Paragraph } = Typography;
const cardShadowStyle: CSS.Properties = {
    width: '100%',
    maxWidth: '700px',
    height: 'auto',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '2px 2px 4px #b4b8bf, -2px -2px 4px #ffffff',
    margin: '20px auto',
    fontSize: '16px',
    color: '#2f54eb',
    display: 'inline-block',
    padding: '20px'
}

const ContactPage = () => (
    <PageLayout backgroundColor="#f0f5ff">
        <SEO title="プライバシーポリシー・規約" meta={[]} description="tomokiya.com内でのプライバシーポリシーと規約の詳細です" />
        <div style={{ maxWidth: '900px', margin: '70px auto', padding: '20px' }}>
            <Title level={1} style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>プライバシーポリシー・規約</Title>
            <div style={{ textAlign: 'center' }}>
                <div style={cardShadowStyle}>
                    <Paragraph style={{ fontSize: '18px', color: 'black' }}>アクセス解析ツールについて</Paragraph>
                    <Paragraph style={{ textAlign: 'left' }}>
                        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                        このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">ここ</a>をクリックしてください。
                </Paragraph>
                </div>
                <div style={cardShadowStyle}>
                    <Paragraph style={{ fontSize: '18px', color: 'black' }}>免責事項</Paragraph>
                    <Paragraph style={{ textAlign: 'left' }}>
                        当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                </Paragraph>
                </div>
            </div>
        </div>
    </PageLayout>
)

export default ContactPage