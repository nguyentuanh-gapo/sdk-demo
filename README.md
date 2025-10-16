# Sdk-demo Turborepo

Đây là một monorepo trình diễn cách tích hợp và sử dụng SDK tùy chỉnh trong các loại ứng dụng khác nhau (Angular, React, HTML thuần).

## Cấu trúc dự án

Monorepo này bao gồm các ứng dụng và gói sau:

### Apps (Ứng dụng demo)

- `angular-sdk-demo`: Ứng dụng demo Angular tích hợp SDK.
- `direct-sdk-demo`: Ứng dụng demo React/Vite tích hợp SDK thông qua cấu hình alias.
- `html-sdk-demo`: Ứng dụng demo HTML thuần tích hợp SDK bằng cách tải trực tiếp script UMD.
- `web-demo`: Ứng dụng demo React/Vite tích hợp SDK.

### Packages (Gói)

- `sdk`: Gói SDK chính chứa mã nguồn của SDK.
- `eslint-config`: Cấu hình ESLint được chia sẻ.
- `typescript-config`: Cấu hình TypeScript được chia sẻ.
- `ui`: Thư viện thành phần React được chia sẻ.

## Scripts khả dụng

Bạn có thể chạy các lệnh script sau từ thư mục gốc của dự án:

- `pnpm build`: Xây dựng tất cả các ứng dụng và gói trong monorepo.
- `pnpm dev:web-demo`: Chạy ứng dụng web-demo ở chế độ phát triển.
- `pnpm dev:direct-sdk-demo`: Chạy ứng dụng direct-sdk-demo ở chế độ phát triển.
- `pnpm dev:angular-sdk-demo`: Chạy ứng dụng angular-sdk-demo ở chế độ phát triển.
- `pnpm dev:html-sdk-demo`: Chạy ứng dụng html-sdk-demo ở chế độ phát triển (sử dụng http-server).
- `pnpm lint`: Chạy linting cho tất cả các ứng dụng và gói.
- `pnpm format`: Định dạng mã nguồn bằng Prettier.
- `pnpm check-types`: Kiểm tra lỗi kiểu TypeScript cho tất cả các ứng dụng và gói.

## Tích hợp SDK vào các dự án Demo

SDK (`packages/sdk`) được xây dựng thành các tệp phân phối (UMD, ES module, kiểu) trong thư mục `dist`. Các ứng dụng demo sử dụng các tệp này thông qua thư mục `local-sdk` được sao chép từ `packages/sdk/dist`.

### 1. Build SDK

Để đảm bảo các ứng dụng demo sử dụng phiên bản SDK mới nhất, bạn cần build gói `sdk`:

```bash
pnpm --filter @demo/sdk build
```

### 2. Sao chép SDK vào `local-sdk` (cho React/Vite)

Các ứng dụng demo React/Vite (`direct-sdk-demo` và `web-demo`) sử dụng một thư mục `local-sdk` trong thư mục ứng dụng của chúng để chứa các tệp phân phối của SDK. Lệnh này được tự động chạy trong các script `dev` và `build` của các ứng dụng đó:

```bash
pmkdir -p apps/direct-sdk-demo/local-sdk && cp -r packages/sdk/dist/* apps/direct-sdk-demo/local-sdk/
pmkdir -p apps/web-demo/local-sdk && cp -r packages/sdk/dist/* apps/web-demo/local-sdk/
```

_(Lưu ý: Các lệnh `dev` và `build` trong `package.json` của từng ứng dụng đã được cấu hình để thực hiện bước này tự động.)_

### 3. Cấu hình ứng dụng để sử dụng SDK cục bộ

#### a) `direct-sdk-demo` và `web-demo` (React/Vite)

Các ứng dụng này sử dụng alias trong `vite.config.ts` và `paths` trong `tsconfig.json` để phân giải `@demo/sdk` đến thư mục `local-sdk` của chúng.

**`apps/<app-name>/vite.config.ts`:**

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@demo/sdk": path.resolve(__dirname, "./local-sdk/index.es.js"),
      "@demo/sdk/style.css": path.resolve(__dirname, "./local-sdk/style.css"),
    },
  },
});
```

**`apps/<app-name>/tsconfig.json`:**

```json
{
  "compilerOptions": {
    "paths": {
      "@demo/sdk": ["./local-sdk"]
    }
  },
  "include": ["src", "local-sdk"]
}
```

Với cấu hình này, bạn có thể import SDK như sau trong `src/main.tsx`:

```typescript
import { DemoSDK } from "@demo/sdk";
import "../local-sdk/style.css"; // Nhập trực tiếp kiểu CSS
```

#### b) `html-sdk-demo` (HTML thuần)

Ứng dụng này tải SDK trực tiếp từ tệp UMD trong thư mục `local-sdk` của nó.

**`apps/html-sdk-demo/index.html`:**

```html
<!-- Load the UMD build of the SDK -->
<script src="../../packages/sdk/dist/index.umd.js"></script>
<link rel="stylesheet" href="./style.css" />
<!-- Hoặc nếu bạn muốn dùng style của SDK, dùng đường dẫn tương đối đến packages/sdk/dist/style.css -->
<!-- <link rel="stylesheet" href="../../packages/sdk/dist/style.css" /> -->
```

Bạn có thể tương tác với SDK thông qua đối tượng `window.MySDK` trong script của mình.

#### c) `angular-sdk-demo` (Angular)

Để tích hợp SDK vào Angular, bạn cần đảm bảo các tệp SDK được build và sau đó có thể được sử dụng trong dự án Angular. Thông thường, bạn sẽ import SDK từ `local-sdk` hoặc cấu hình Angular để phân giải gói `@demo/sdk`.

**`apps/angular-sdk-demo/src/app/app.component.ts`:**

```typescript
import { Component } from "@angular/core";
import { DemoSDK } from "../../../packages/sdk"; // Hoặc đường dẫn đến local-sdk

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  sdkOptions = {
    language: "en",
    theme: "dark",
    token: "static-angular-token",
  };
}
```

**`apps/angular-sdk-demo/src/app/app.component.html`:**

```html
<demo-sdk [options]="sdkOptions"></demo-sdk>
```

_(Lưu ý: Bạn có thể cần cấu hình thêm trong `angular.json` hoặc `tsconfig.json` của Angular để phân giải gói SDK hoặc các tệp kiểu.)_
