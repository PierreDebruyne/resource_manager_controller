#!/bin/bash

git pull origin main &&
git submodule foreach "chmod +x ./git_pull.sh && ./git_pull.sh"