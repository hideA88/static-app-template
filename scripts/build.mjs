import { build } from 'esbuild'
import glob from 'glob'

const entryPoints = glob.sync('./src/**/*.ts')

export const buildOption = {
	  entryPoints,
	  outbase: './src',
	  outdir: './public/js' ,
	  platform: 'node',
	  external: [],
	  bundle: true
}

build(buildOption)

