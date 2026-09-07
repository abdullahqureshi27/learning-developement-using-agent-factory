# Agent Factory — Autonomous AI Systems & Full-Stack Engineering Platform

> **Comprehensive laboratory, reference implementation, and engineering suite for autonomous agent design, Model Context Protocol (MCP) servers, FastAPI asynchronous backends, SQLModel data pipelines, and Next.js 15 auth portals.**

---

> **Created & Maintained by [Abdullah Qureshi](https://abdullah-qureshi.vercel.app)**  
> 🌐 **Portfolio**: [abdullah-qureshi.vercel.app](https://abdullah-qureshi.vercel.app) • 💼 **LinkedIn**: [abdullahqureshi27](https://www.linkedin.com/in/abdullahqureshi27) • 🐙 **GitHub**: [@abdullahqureshi27](https://github.com/abdullahqureshi27)

---

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15_App_Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/Protocol-MCP_Model_Context-blueviolet?style=for-the-badge)](https://modelcontextprotocol.io/)
[![Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/abdullahqureshi27/learning-developement-using-agent-factory)

---

## 🌟 Key Architecture Modules

- 🤖 **MCP (Model Context Protocol) Server Suite**: Custom-engineered MCP servers providing external tool definitions, stateful resources, and sandboxed prompt executions to Claude and OpenAI agent clients.
- ⚡ **Asynchronous FastAPI Engines**: High-performance RESTful APIs built with `asyncpg`, dependency injection, background worker tasks, and OpenAPI schemas.
- 🗄️ **Relational Data Modeling with SQLModel**: Asynchronous database access and migration patterns across PostgreSQL with Neon serverless connectivity.
- 🔐 **Next.js 15 & Better Auth Dashboard**: End-to-end full-stack authentication portal featuring JWT sessions, JWKS verification, and responsive dashboards.
- 🧠 **Agent SDK CLI Framework**: Modular agentic command-line interface demonstrating structured JSON tool-use, loop control, and reasoning boundaries.

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    subgraph FrontendTier["Client Tier (Next.js 15)"]
        UI["App Router Pages (/dashboard, /login)"]
        AuthCtx["Better Auth Context & Session Provider"]
    end

    subgraph ServiceTier["Backend Tier (FastAPI)"]
        Router["Asynchronous API Endpoints"]
        AgentEngine["Agent Orchestration Engine"]
        MCPServers["Model Context Protocol (MCP) Servers"]
    end

    subgraph PersistenceTier["Storage & Knowledge Tier"]
        Postgres["PostgreSQL / Neon Cloud DB"]
        SQLModelORM["SQLModel Schema Models"]
    end

    subgraph ExternalLLM["LLM Foundation Providers"]
        OpenAI["OpenAI / ChatKit"]
        Claude["Anthropic Claude / MCP Host"]
    end

    UI <-->|HTTP / JSON| Router
    AuthCtx <-->|Session Tokens| Router
    Router <--> SQLModelORM
    SQLModelORM <--> Postgres
    AgentEngine <--> MCPServers
    MCPServers <--> ExternalLLM
```

---

## 🛠️ Technology Stack

| Domain | Technology / Library | Purpose |
|---|---|---|
| **Backend API** | [FastAPI](https://fastapi.tiangolo.com/) | High-performance asynchronous microservices |
| **Frontend UI** | [Next.js 15](https://nextjs.org/) + [React 19](https://react.dev/) | Client portals, RSC, and state management |
| **Protocols** | [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) | Context and tool interfaces for LLMs |
| **ORM & Database** | [SQLModel](https://sqlmodel.tiangolo.com/) + [PostgreSQL](https://www.postgresql.org/) | Type-safe asynchronous schema validation |
| **Authentication** | [Better Auth](https://www.better-auth.com/) | Secure cookie, session, and JWT management |
| **Languages** | Python 3.12+ & TypeScript 5 | End-to-end type safety |

---

## 📂 Repository Directory Layout

```text
learning-developement-using-agent-factory/
├── mcp_servers/              # Custom Model Context Protocol (MCP) server implementations
├── fastapi/                  # Asynchronous FastAPI microservices and routers
├── frontend/                 # Next.js 15 Better Auth client dashboard
├── PostgreSQL/               # Database migration scripts and schema definitions
├── sqlmodel-learning/        # SQLModel relationships, query optimizations, and tests
├── projects/                 # Concrete autonomous agent applications & CLI tools
├── chatkit_openai/           # ChatKit and streaming LLM integration interfaces
├── student-management-system/# Full-stack educational management service
└── LEARNING_ROADMAP.md       # Comprehensive syllabus and design curriculum
```

---

## 🚀 Local Quickstart Guide

### Prerequisites
- Python 3.12+ and [uv](https://docs.astral.sh/uv/) (or virtualenv)
- Node.js 18+ and npm

### 1. Clone Repository
```bash
git clone https://github.com/abdullahqureshi27/learning-developement-using-agent-factory.git
cd learning-developement-using-agent-factory
```

### 2. Run Backend Services
```bash
cd fastapi
python -m venv .venv
# On Windows:
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3. Run Frontend Portal
```bash
cd ../frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) for the UI and [http://localhost:8000/docs](http://localhost:8000/docs) for the interactive Swagger documentation.

---

## 🧪 Verification & Testing

```bash
# Verify Python syntax across core agent modules
python -m py_compile agent_copy.py

# Typecheck and build the Next.js frontend
cd frontend
npm run build
```

---

## 👨‍💻 Author & Connect

**Abdullah Qureshi**  
*Full-Stack & AI Systems Engineer*

- 🌐 **Portfolio**: [https://abdullah-qureshi.vercel.app](https://abdullah-qureshi.vercel.app)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/abdullahqureshi27](https://www.linkedin.com/in/abdullahqureshi27)
- 🐙 **GitHub**: [https://github.com/abdullahqureshi27](https://github.com/abdullahqureshi27)
- ✉️ **Contact**: [mabdullahqureshi583@gmail.com](mailto:mabdullahqureshi583@gmail.com)
