import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomeComponent from '../src/components/Home/Home.component';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
describe('Home component', () => {
    it('should have 3 ListGroupItem', () => {
        const data = [
            {
                id:1,
                login:'abc',
                avatar_url:'abc'
            },
            {
                id:2,
                login:'abc',
                avatar_url:'abc'
            },
            {
                id:3,
                login:'abc',
                avatar_url:'abc'
            },
        ]
        const wrapper= shallow(<HomeComponent data={data} />)
        expect(wrapper.find('ListGroupItem').length).toEqual(3)
    })
    it('should have 2 ListGroupItem', () => {
        const data = [
            {
                id:1,
                login:'abc',
                avatar_url:'abc'
            },
            {
                id:2,
                login:'abc',
                avatar_url:'abc'
            },
        ]
        const wrapper= shallow(<HomeComponent data={data} />)
        expect(wrapper.find('ListGroupItem').length).toEqual(2)
    })
    it('should check proptype of data', () => {
        const data = [
            {
                id:1,
                login:'abc',
                avatar_url:'abc'
            },
            {
                id:2,
                login:'abc',
                avatar_url:'abc'
            },
        ]
        const wrapper= <HomeComponent data={data} />
        expect( typeof wrapper.props.data ).toEqual( 'object' );
    })
    it('should match snapshot', () => {
        const data = [
            {
                id:1,
                login:'abc',
                avatar_url:'abc'
            },
            {
                id:2,
                login:'abc',
                avatar_url:'abc'
            },
        ]
        const wrapper= shallow(<HomeComponent data={data} />)
        expect(wrapper).toMatchSnapshot()
    })
})