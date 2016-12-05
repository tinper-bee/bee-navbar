import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Navbar from '../src/index'
import FormControl from 'bee-form-control';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;


describe('Navbar 子组件测试', function() {
	
	it('Navbar exist', function() {
		let navbar = shallow(<Navbar/>);
		expect(navbar.hasClass('navbar')).to.equal(true);
	})
	it('Navbar inverse', function() {
		let navbar = shallow(<Navbar inverse/>);
		expect(navbar.hasClass('navbar-inverse')).to.equal(true);
	})
	it('Navbar fixedBottom', function() {
		let navbar = shallow(<Navbar fixedBottom/>);
		expect(navbar.hasClass('navbar-fixed-bottom')).to.equal(true);
	})
	it('Navbar fixedTop', function() {
		let navbar = shallow(<Navbar fixedTop/>);
		expect(navbar.hasClass('navbar-fixed-top')).to.equal(true);
	})
})
describe('NavbarHeader 子组件测试', function() {
	it('NavbarHeader exist', function() {
		let header = shallow(<Header/>);
		expect(header.hasClass('navbar-header')).to.equal(true);
	})
})
describe('NavbarBrand 子组件测试', function() {
	it('NavbarHeader exist', function() {
		let brand = shallow(<Brand/>);
		expect(brand.hasClass('navbar-brand')).to.equal(true);
	})
})
describe('NavbarToggle 子组件测试', function() {
	it('NavbarToggle exist', function() {
		let navbar = mount(<Navbar><Toggle/></Navbar>);
		expect(navbar.find('.navbar-toggle').length).to.equal(1);
	})
	it('NavbarToggle default children exist', function() {
		let navbar = mount(<Navbar><Toggle/></Navbar>);
		let toggle = navbar.find(".navbar-toggle");
		expect(toggle.find('.icon-bar').length).to.equal(3);
	})
	it('NavbarToggle default children exist', function() {
		let navbar = mount(<Navbar><Toggle/></Navbar>);
		let toggle = navbar.find(".navbar-toggle");
		expect(navbar.find('.sr-only').length).to.equal(1);
	})
})
describe('NavbarNav 子组件测试', function() {
	it('NavbarNav exist', function() {
		let nav = mount(<Nav></Nav>);
		expect(nav.find('.navbar-nav').length).to.equal(1);
	})
	it('NavbarNav pullLeft exist', function() {
		let nav = shallow(<Nav pullLeft></Nav>);
		expect(nav.hasClass('navbar-left')).to.equal(true);
	})
	it('NavbarNav pullRight exist', function() {
		let nav = shallow(<Nav pullRight></Nav>);
		expect(nav.hasClass('navbar-right')).to.equal(true);
	})
})
describe('NavbarNavItem 子组件测试', function() {
	it('NavbarNavItem exist', function() {
		let navitem = mount(<Nav pullLeft><NavItem></NavItem></Nav>);
		expect(navitem.find('li').length).to.equal(1);
	})
})
describe('NavbarCollapse 子组件测试', function() {
	it('NavbarCollapse exist', function() {
		let navbar = mount(<Navbar expanded={true}><Collapse></Collapse></Navbar>);
		expect(navbar.find('.navbar-collapse').length).to.equal(1);
	})
})
