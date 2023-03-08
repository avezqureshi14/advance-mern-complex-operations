import { Menu } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function MemoriesNavBar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="logo" style={{ fontWeight: 'bold', fontSize: '24px' }}>
        Memories
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<UserOutlined />} title="About">
        <Menu.Item key="about:1">Our Story</Menu.Item>
        <Menu.Item key="about:2">Our Team</Menu.Item>
      </SubMenu>
      <Menu.Item key="contact" icon={<MailOutlined />}>
        Contact
      </Menu.Item>
    </Menu>
  );
}

export default MemoriesNavBar;
