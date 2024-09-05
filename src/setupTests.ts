import { vi } from "vitest";

import "@testing-library/jest-dom/vitest";

global.fetch = vi.fn();
(global as any).cwr = vi.fn();
global.structuredClone = (obj: unknown) => JSON.parse(JSON.stringify(obj));
