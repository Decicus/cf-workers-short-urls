# cf-workers-short-urls

Basic URL shortener that utilizes Workers KV to redirect users to sites and pages.

## Requirements

- A [Cloudflare Workers][CF-Workers] account
- A Cloudflare Workers ['Bundled' plan](https://workers.cloudflare.com/#plans) ($5 per month).
    - Unfortunately Workers KV is a paywalled feature.

After your account has been setup with a paid plan, create a Workers KV namespace.  
Add your "short codes" as `Key` and the target URL as `value`.

Screenshot: ![Screenshot of an example namespace on Workers KV](https://i.alex.lol/2020-10-19_FRmkuw.png)  
Example: If your workers URL is `https://example.com/` then `https://example.com/workers` would redirect to [https://workers.cloudflare.com/][CF-Workers]

## Quick setup

**Requires [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update)**

1. Copy `wrangler.sample.toml` to `wrangler.toml`.
2. Modify the values in `wrangler.toml`
   1. Note: The `binding` value should be left as `URLS_KV`, but `id` (and `preview_id` if you plan on running `wrangler preview`) should be set to the correct namespace IDs.
   2. `FALLBACK_URL` is used instead of `404 Not Found`. I recommend pointing this to your homepage or similar.

[CF-Workers]: https://workers.cloudflare.com/