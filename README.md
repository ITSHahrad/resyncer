# 📦 resyncer

**Simple CLI tool to fetch and sync remote resources into your project.**
Maintain consistency across multiple projects by syncing schemas, configs, templates, or any remote files using a config-based setup.

> Created with ❤️ by [ITSHahrad](https://github.com/ITSHahrad)

---

## 🚀 Features

* 📁 **Config-based** resource management
* 🌐 **Download raw files** from URLs (e.g., GitHub)
* ⚠️ **Prompts before overwriting** existing files
* ⚙️ Simple `JSON` configuration
* 🧑‍💻 Easy-to-use **CLI via `npx`**

---

## 📦 Installation (optional)

You can run `resyncer` directly using `npx`, or install globally if preferred:

```bash
# Run without install
npx resyncer init
npx resyncer run

# OR install globally
npm install -g resyncer
resyncer init
resyncer run
```

---

## 🛠️ Usage

### 1. Initialize config

Creates a `downloader.config.json` in your project root:

```bash
npx resyncer init
```

Example generated config:

```json
{
  "outputPath": "./src/resources",
  "sources": [
    {
      "name": "example.schema.ts",
      "url": "https://raw.githubusercontent.com/user/repo/branch/path/to/example.schema.ts"
    }
  ]
}
```

---

### 2. Run resync

Downloads all files listed in `downloader.config.json`:

```bash
npx resyncer run
```

* If a file already exists, you'll be prompted to confirm before replacing it.

---

## 📁 Config Format (`downloader.config.json`)

```json
{
  "outputPath": "./src/resources", 
  "sources": [
    {
      "name": "filename.ext",
      "url": "https://raw.githubusercontent.com/user/repo/branch/path/to/file.ext"
    }
  ]
}
```

* `outputPath`: Relative path where files should be saved.
* `sources`: Array of objects with `name` (local filename) and `url` (raw file link).

---

## 📄 License

MIT License

---

## 👤 Author

**ITSHahrad**
[GitHub](https://github.com/ITSHahrad)