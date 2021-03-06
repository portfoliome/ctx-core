const node_resolve__plugin = require('rollup-plugin-node-resolve')
    , commonjs__plugin = require('rollup-plugin-commonjs')
    , sourcemaps__plugin = require('rollup-plugin-sourcemaps')
    , alias__plugin = require('rollup-plugin-alias')
    , json__plugin = require('rollup-plugin-json')
    , buble__plugin = require('rollup-plugin-buble')
    , nodent__plugin = require('ctx-core/nodent/rollup')
    , $path = require('path')
    , fs = require('fs')
    , relativePath = /^\.?\.\//
    , {_builtinLibs} = require('repl')
    , {ls} = require('shelljs')
module.exports = {
  $browser__rollup,
  $node__rollup,
  $plugins__browser,
  $plugins__node,
  $external__npm,
  $externals__node_modules,
  resolve__rollup
}
function $browser__rollup() {
  const ctx = Object.assign({
    intro: `
      var global = typeof window !== 'undefined' ? window :
        typeof global !== 'undefined' ? global :
        this`,
    format: 'iife',
    globals: {
      global: 'window',
      riot: 'riot'
    },
    external: [
      'crypto',
      'fs',
      'path',
      'process',
      'riot'
    ]
  }, ...arguments)
  if (!ctx.plugins) ctx.plugins = $plugins__browser()
  return $rollup(ctx)
}
function $plugins__browser(processor__plugin, ...rest) {
  return [
    alias__plugin({
      'ctx-core/logger/chalk': 'ctx-core/logger/chalk.browser.js'
    }),
    sourcemaps__plugin(),
    commonjs__plugin({
      include: 'node_modules/**',
      extensions: [ '.js', '.coffee' ]
    }),
    json__plugin(),
    resolve__rollup({
      paths: ['.', 'ctx-core', 'node_modules'],
      extensions: ['.js', '.json', '.tag']
    }),
    node_resolve__plugin({
      jsnext: true,
      main: true,
      browser: true
    }),
    ...$processor__plugin(processor__plugin),
    nodent__plugin(),
    buble__plugin(),
    ...rest
  ]
}
function $node__rollup() {
  const $ =
          Object.assign(
            {
              format: 'cjs',
              external: $external__npm({
                paths: ['.', 'ctx-core', 'node_modules'],
                externals: $externals__node_modules(),
                extensions: ['.js', '.json', '.tag']
              }),
            }, ...arguments
          )
  if (!$.plugins) $.plugins = $plugins__node()
  return $rollup($)
}
function $plugins__node(processor__plugin, ...rest) {
  return [
    sourcemaps__plugin(),
    json__plugin(),
    resolve__rollup({
      paths: ['.', 'ctx-core', 'node_modules'],
      externals: $externals__node_modules(),
      extensions: ['.js', '.json', '.tag']
    }),
    ...$processor__plugin(processor__plugin),
    nodent__plugin(),
    buble__plugin(),
    ...rest
  ]
}
function $external__npm(options) {
  const resolveId = $resolveId(options)
  return external__npm
  function external__npm(id) {
    const $$ = resolveId(id)
        , $ = relativePath.test(id) ? false : !$$
    return $
  }
}
function resolve__rollup(options) {
  return {
    name: 'resolve__rollup',
    resolveId: $resolveId(options)
  }
}
function $resolveId(options) {
  const externals = options.externals || []
  return resolveId
  function resolveId(id, origin) {
    let path = id
    const path__split = path.split('/')
        , path0 = path__split[0]
    if (externals.indexOf(path0) !== -1) {
      return null
    }
    if (_builtinLibs.indexOf(path0) !== -1) {
      return null
    }
    if (path.slice(0, 1) === '.') {
      const dirname = origin && $path.dirname(origin)
      if (dirname) {
        path = $path.join(dirname, id)
      }
      else {
        return null
      }
    }
    return require.resolve(path)
  }
}
/**
 * @returns {Object}
 * @TODO: Unset watch.useChokidar = false if {@link https://github.com/rollup/rollup-watch/issues/51} is fixed
 */
function $rollup() {
  return Object.assign({
    watch: {
      useChokidar: false
    }
  }, ...arguments)
}
function $processor__plugin(processor__plugin) {
  if (processor__plugin) {
    const _processor__plugin = processor__plugin()
    if (_processor__plugin) {
      if (_processor__plugin === 'array') {
        return _processor__plugin
      }
      return [_processor__plugin]
    }
  }
  return []
}
function $externals__node_modules() {
  const files = ls('-d', './node_modules/*')
      , externals = []
  for (let i=0; i < files.length; i++) {
    const file = files[i].replace('./node_modules/', '')
    externals.push(file)
  }
  return externals
}