/**
 * number library
 * @module ctx-core/agent/lib
 */
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/number/lib'
/**
 * @property {number} power represented as a string
 * @typedef denominations
 * @example
 * {7: 'MIL', 10: 'BIL'}
 */
/**
 * Normalization text for a number
 * @param {number} number
 * @param {module:ctx-core/number/lib~denominations} denominations
 * @returns {string}
 * @example
 * `$${text__normalize__number(amount, {7: 'MIL', 10: 'BIL'})}`
 */
export function text__normalize__number(number, denominations) {
  log(`${logPrefix}|text__normalize__number`)
  const float = parseFloat(number)
  if (!float) return '0'
  const power = Math.floor(Math.log10(float))
      , power__step =
          power >= 0
          ? -1
          : 1
  let denomination, denomination__i
  set__denomination()
  const normalized__float =
          denomination
          ? float / Math.pow(10, denomination__i)
          : float
      , normalized__fixed = normalized__float.toFixed(2)
  return `${normalized__fixed}${denomination}`
  function set__denomination() {
    denomination__i = power
    while (denomination__i) {
      denomination = denominations[denomination__i]
      if (denomination) break
      denomination__i = denomination__i + power__step
    }
    if (!denomination) denomination = ''
  }
}