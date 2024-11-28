#!/usr/bin/env just --justfile
export PATH := join(justfile_directory(), "node_modules", "bin") + ":" + env_var('PATH')

dev:
    bunx vite dev

build:
  bunx vite build

deploy: build
  bunx gh-pages -d build -t true

update:
    bunx ncu -u