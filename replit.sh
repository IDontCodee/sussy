#!/bin/bash

if [[ ! -d "node_modules" ]]; then
    yarn
fi

if [[ ! -d "dist" ]]; then
    yarn build
fi

yarn start