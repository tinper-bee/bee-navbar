/**
 * @title 子菜单呼出形式Menu
 * @description 子菜单在右侧呼出形式显示。
 */

class Demo5 extends Component {

    handleClick() {
        console.log('click', e);
    }
    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} mode="vertical">
                <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Iteom 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}