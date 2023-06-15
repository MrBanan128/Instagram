import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'


describe('Glowna', () => {
  it('renders properly', () => {
    const wrapper = mount(Glowna, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
