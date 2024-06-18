'use client'

import { Layout, Row, Col, Typography, Card, Button } from 'antd'
import Header from '@/components/layout/Header'
// import 'tailwindcss/tailwind.css';
import VideoPlayer from '@/components/media/VideoPlayer'

const { Content } = Layout
const { Title, Paragraph } = Typography

const Page = () => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <div className="divider"></div>

      <Content className="p-8">
        <Row gutter={24}>
          <Col span={16}>
            {/* Video player component */}
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden grid">
              <VideoPlayer url="https://youtu.be/gieEQFIfgYc" />
            </div>
            <div className="mt-4">
              <Title level={2}>Course Title</Title>
              <Paragraph className="text-gray-600 mt-4">
                Description of the course goes here. You can add more details
                about the course content and features. Description of the course
                goes here. You can add more details about the course content and
                features. Description of the course goes here. You can add more
                details about the course content and features. Description of
                the course goes here. You can add more details about the course
                content and features.
              </Paragraph>
            </div>
          </Col>
          <Col span={8}>
            <Card title="Course Details">
              <p>Author: John Doe</p>
              <p>Duration: 5 hours</p>
              <Button type="primary" className="mt-4 block w-full">
                Enroll Now
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Page
