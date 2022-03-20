import React from 'react'
import {create} from "react-test-renderer"
import ProfileStatus from './ProfileStatusWithHooks.jsx'

describe('ProfileStatus comonent', () => {
  test('status test', () => {
    const component = create(<ProfileStatus status='SUBSCRIBE TO BASIC' />)
    const instance = component.getInstance()
    expect(instance.state.text).toBe('SUBSCRIBE TO BASIC')
  })
})