<p align="center"><a href="https://usememos.com"><img height="64px" src="https://raw.githubusercontent.com/usememos/memos/main/resources/logo-full.webp" alt="✍️ memos" /></a></p>

<p align="center">An open-source, self-hosted memo hub with knowledge management and socialization.</p>

<p align="center">
  <a href="https://github.com/usememos/memos/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/usememos/memos" /></a>
  <a href="https://hub.docker.com/r/neosmemo/memos"><img alt="Docker pull" src="https://img.shields.io/docker/pulls/neosmemo/memos.svg" /></a>
  <img alt="Go report" src="https://goreportcard.com/badge/github.com/usememos/memos" />
</p>

<p align="center">
  <a href="https://demo.usememos.com/">Live Demo</a> •
  Discuss in <a href="https://t.me/+-_tNF1k70UU4ZTc9">Telegram</a> / <b><a href="https://discord.gg/tfPJa4UmAv">Discord 🏂</a></b>
</p>

![demo](https://raw.githubusercontent.com/usememos/memos/main/resources/demo.webp)

## Features

- 🦄 Open source and free forever;
- 🚀 Support for self-hosting with `Docker` in seconds;
- 📜 Plain textarea first and support some useful markdown syntax;
- 👥 Set memo private or public to others;
- 🧑‍💻 RESTful API for self-service.

## Deploy with Docker in seconds

### Docker Run

```docker
docker run -d --name memos -p 5230:5230 -v ~/.memos/:/var/opt/memos neosmemo/memos:latest
```

If the `~/.memos/` does not have a `memos_prod.db` file, then memos will auto generate it. Memos will be running at [http://localhost:5230](http://localhost:5230).

### Docker Compose

Example Compose YAML file: [`docker-compose.yaml`](./docker-compose.yaml).

If you want to upgrade the version of memos, use the following command.

```sh
docker-compose down && docker image rm neosmemo/memos:latest && docker-compose up -d
```

## Contribute

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. 🥰

See more in [development guide](https://github.com/usememos/memos/tree/main/docs/development.md).

## Products made by Community

- [Moe Memos](https://memos.moe/) - Third party client for iOS and Android
- [lmm214/memos-bber](https://github.com/lmm214/memos-bber) - Chrome extension
- [Rabithua/memos_wmp](https://github.com/Rabithua/memos_wmp) - Wechat miniprogram
- [qazxcdswe123/telegramMemoBot](https://github.com/qazxcdswe123/telegramMemoBot) - Telegram bot

## License

This project is open source and available under the [MIT License](https://github.com/usememos/memos/blob/main/LICENSE).

## Star history

[![Star History Chart](https://api.star-history.com/svg?repos=usememos/memos&type=Date)](https://star-history.com/#usememos/memos&Date)
