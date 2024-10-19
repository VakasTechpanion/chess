import React, { useState } from 'react';
import { Layout, Menu, Button, Modal, Form, Input } from 'antd';
import logo from "../../images/chess-logo.jpg";

const { Header, Content, Footer } = Layout;
const label = ['Fees Structure', 'Contact', 'Social Media'];

const items = label.map((_, index) => ({
    key: index + 1,
    label: _,
}));

const CheckHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle opening the modal
    const showModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Function to handle form submission
    const handleFormSubmit = (values) => {
        console.log('Form values:', values);
        setIsModalOpen(false); // Close the modal after submission
    };

    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 24px', // Add padding for better spacing
                }}
            >
                {/* Logo and Title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Sambodhi Chess Academy Logo" style={{ width: '50px', marginRight: '15px' }} />
                    <h1 style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>Sambodhi Chess Academy</h1>
                </div>

                {/* Menu Items */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        minWidth: 0,
                    }}
                />
            </Header>

            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <div
                    style={{
                        background: 'white',
                        minHeight: 280,
                        padding: 24,
                        borderRadius: 8,
                    }}
                >

                    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2b2b2b' }}>
                        WELCOME TO SAMBODHI CHESS ACADEMY
                    </h1>

                    <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555' }}>
                        At <strong>Sambodhi Chess Academy</strong>, we are dedicated to shaping the minds of future chess champions.
                        Whether you're just getting started or already a seasoned player, we offer a welcoming environment that promotes
                        growth, learning, and competitive success.
                    </p>

                    {/* Button to open form modal */}
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button type="primary" onClick={showModal}>
                            Join Us - Fill the Form
                        </Button>
                    </div>

                    <section style={{ marginTop: '30px' }}>
                        <h2>Why Sambodhi Chess Academy?</h2>
                        <ul>
                            <li><strong>Expert Coaches:</strong> Learn from national and international chess masters.</li>
                            <li><strong>Comprehensive Programs:</strong> Tailored for players at all skill levels.</li>
                            <li><strong>Flexible Learning:</strong> Choose between online or in-person classes.</li>
                            <li><strong>Tournaments & Events:</strong> Participate in regular competitions.</li>
                            <li><strong>Focus on Strategy:</strong> Improve tactics and long-term strategies.</li>
                        </ul>
                    </section>

                    <section style={{ marginTop: '30px' }}>
                        <h2>Our Programs</h2>
                        <ol>
                            <li><strong>Beginner Program:</strong> Covering the essentials of chess.</li>
                            <li><strong>Intermediate Training:</strong> Focus on tactics and advanced strategies.</li>
                            <li><strong>Advanced Coaching:</strong> Personalized training for competitive players.</li>
                            <li><strong>Special Workshops:</strong> Themed workshops on opening theory and more.</li>
                        </ol>
                    </section>

                    <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.2rem', color: '#555' }}>
                        At Sambodhi Chess Academy, we believe in empowering minds through the art of chess. Start your journey with us
                        today and unlock the world of chess mastery!
                    </p>
                </div>
            </Content>

            {/* Form Modal */}
            <Modal
                title="Join Sambodhi Chess Academy"
                visible={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={handleFormSubmit}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Sambodhi Chess Academy ©{new Date().getFullYear()} Created by Developer
            </Footer>
        </Layout>
    );
};

export default CheckHeader;