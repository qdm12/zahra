# Zahra

*Zahra frontend in React+Typescript and Google scripts*

<img height="200" src="title.svg?sanitize=true">

[![Build status](https://github.com/qdm12/zahra/workflows/Buildx%20latest/badge.svg)](https://github.com/qdm12/zahra/actions?query=workflow%3A%22Buildx+latest%22)
[![Docker Pulls](https://img.shields.io/docker/pulls/qmcgaw/zahra.svg)](https://hub.docker.com/r/qmcgaw/zahra)
[![Docker Stars](https://img.shields.io/docker/stars/qmcgaw/zahra.svg)](https://hub.docker.com/r/qmcgaw/zahra)
[![Image size](https://images.microbadger.com/badges/image/qmcgaw/zahra.svg)](https://microbadger.com/images/qmcgaw/zahra)
[![Image version](https://images.microbadger.com/badges/version/qmcgaw/zahra.svg)](https://microbadger.com/images/qmcgaw/zahra)

[![Join Slack channel](https://img.shields.io/badge/slack-@qdm12-yellow.svg?logo=slack)](https://join.slack.com/t/qdm12/shared_invite/enQtOTE0NjcxNTM1ODc5LTYyZmVlOTM3MGI4ZWU0YmJkMjUxNmQ4ODQ2OTAwYzMxMTlhY2Q1MWQyOWUyNjc2ODliNjFjMDUxNWNmNzk5MDk)
[![GitHub last commit](https://img.shields.io/github/last-commit/qdm12/zahra.svg)](https://github.com/qdm12/zahra/issues)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/y/qdm12/zahra.svg)](https://github.com/qdm12/zahra/issues)
[![GitHub issues](https://img.shields.io/github/issues/qdm12/zahra.svg)](https://github.com/qdm12/zahra/issues)

## Setup

1. Use the following command:

    ```sh
    docker run -d -p 8080:8080/tcp qmcgaw/zahra
    ```

    Alternatively use [docker-compose.yml](https://github.com/qdm12/zahra/blob/master/docker-compose.yml) with:

    ```sh
    docker-compose up -d
    ```

1. Update the image with `docker pull qmcgaw/zahra`

### Environment variables

| Environment variable | Default | Possible values | Description |
| --- | --- | --- | --- |
|  |  |  |  |

## Development

1. Setup your environment

    <details><summary>Using VSCode and Docker</summary><p>

    1. Install [Docker](https://docs.docker.com/install/)
       - On Windows, share a drive with Docker Desktop and have the project on that partition
       - On OSX, share your project directory with Docker Desktop
    1. With [Visual Studio Code](https://code.visualstudio.com/download), install the [remote containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
    1. In Visual Studio Code, press on `F1` and select `Remote-Containers: Open Folder in Container...`
    1. Your dev environment is ready to go!... and it's running in a container :+1:

    </p></details>

    <details><summary>Locally</summary><p>

    Install [Nodejs](https://nodejs.org/en/download/) and [Docker](https://www.docker.com/products/docker-desktop), with eventually [yarn](https://classic.yarnpkg.com/en/docs/install/)

    </p></details>

1. Commands available:

    ```sh
    # Starts the development server with ts-node
    yarn start
    # Test the code
    yarn test
    # Lint the code
    yarn lint
    # Build the app for production
    yarn build
    # Build the Docker image
    docker build -t qmcgaw/zahra .
    ```

1. See [Contributing](.github/CONTRIBUTING.md) for more information on how to contribute to this repository.

## Google App Script

1. Go to the [Scripts homepage](https://script.google.com/home/my)
1. Edit the [booking script](https://script.google.com/d/1ZcAiI87GHUOEFSNb47xTaPMfbPFxTcyiIS5hshPFt9On_3D7hylKKv7T/edit), and replace the content of *script.gs* by the content of [googleScript.js](googleScript.js)
1. Select `Publish`, `Deploy as Web app` and select:
    - Execute the app as: `Me`
    - Who has access to the app: `Anyone, even anonymous`
1. You can check:
    - [Script executions summary](https://script.google.com/home/projects/1ZcAiI87GHUOEFSNb47xTaPMfbPFxTcyiIS5hshPFt9On_3D7hylKKv7T)
    - [Logs](https://console.cloud.google.com/logs/viewer?project=project-id-4217464954757915625)
    - [Mail box](https://mail.google.com/) for culinartrestaurant@gmail.com
    - [Spreadsheet](https://docs.google.com/spreadsheets/d/1V0cjNexIPfT-YqbYUsUtx-fDWoOWx3PmMcJh_QRtIx4)

## TODOs

- [ ] Change public icons and logos
- [ ] Finish data.yml
- [ ] Unit tests
- [ ] Google script in Typescript
