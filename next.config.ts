/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config: { plugins: VeliteWebpackPlugin[] }) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}

class VeliteWebpackPlugin {
  static started = false
  apply(/** @type {import('webpack').Compiler} */ compiler: { hooks: { beforeCompile: { tapPromise: (arg0: string, arg1: () => Promise<void>) => void } }; options: { mode: string } }) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}