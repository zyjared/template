import { describe, expect, it } from 'vitest'

describe('index', () => {
  it.skip('skipped test', () => {
    // Test skipped, no error
    expect(Math.sqrt(4)).toBe(3)
  })
})
