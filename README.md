# PulseWatch
> Watch the pulse of your applications.

AI-powered application observability and incident intelligence platform.
Status: in development 

## Quick start
    cp .env.example .env     # then set your own password
    pnpm infra:up            # starts PostgreSQL + Redis
    pnpm infra:ps            # both should show "healthy"

## Docs
- [Architecture](docs/architecture.md)
- [Conventions](docs/conventions.md)
