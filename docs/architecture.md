# PulseWatch Architecture

Status: Day 1 (infrastructure only). This document grows each phase.

## Planned data flow

    Next.js UI --REST/WebSocket--> Node API --> PostgreSQL
                                      |
                                Redis / BullMQ
                      +---------------+---------------+
                Monitor Worker   Telemetry Worker  Incident Worker
                      |               |               |
              external URLs     OTel Collector <-- Demo services
                                      |
                      Metrics / Logs / Traces storage
                                      |
                  Correlation -> Anomaly -> Incident -> Alerts
                                      |
                        Python ML/RCA service -> AI assistant

## Components (Day 1)
- PostgreSQL 16: relational data (orgs, services, monitors, incidents).
- Redis 7 (append-only persistence): job queues for background workers.
- Both run in Docker Compose, bound to 127.0.0.1 only.