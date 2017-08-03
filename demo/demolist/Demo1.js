/**
 * @title Navbar基础样式
 * @description 当屏幕小于768 菜单隐藏。
 */


class Demo1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            selectedkey: 1
        }
    }

    onToggle(value) {
        this.setState({expanded: value});
    }
    handleSelect(index) {
        this.setState({selectedkey: index});
    }

    render() {
       
        return (
            <div>
                <Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
                    <Header>
                        <Brand>
                            <a href="#">React-FED</a>
                        </Brand>
                        <Toggle />
                    </Header>

                    <Collapse>
                        <Nav selectedkey={this.state.selectedkey} onSelect={this.handleSelect.bind(this)}>
                            <NavItem eventKey={1}>选项</NavItem>
                            <NavItem eventKey={2}>
                                选项
                            </NavItem>
                        </Nav>
                        
                        <Navbar.Form pullRight>
                            <FormControl type="text" placeholder="Search"/>
                        </Navbar.Form>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}