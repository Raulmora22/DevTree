# DevTree

### What is DevTree?

**DevTree** is a modern, open-source **template** alternative to services like Linktree, specifically designed for **developers and IT professionals**. It allows you to create a professional, centralized landing page for all your important links.

**Key features:**

- **Easy GitHub Pages Deployment:** This project is designed to be hosted directly on **GitHub Pages**. Simply clone or use this repository as a template, and you only need to **enable GitHub Pages** in your repository settings.
- **Automatic Deployment (CI/CD):** The moment you create a new repository from this template, the integrated **Continuous Integration/Continuous Deployment (CI/CD)** workflow takes over. Every time you push changes to your repository, **the system will auto-deploy** and update your live page—no manual build steps required\!
- **Total Customization:** Full control over themes, buttons, links, and profile details.
- **Developer-Focused:** Includes a wide range of icons relevant to the development and IT community.

---

### Configuration

All core content and styling options are managed within the **`src/config.ts`** file.

#### 1\. Customizing Buttons and Links

The `buttons` array defines all the links that appear on your page.

**File: `src/config.ts`**

```typescript
export const buttons = [
  // You can change the text, link, and icon for each button
  { label: "Github", href: "https://github.com", Icon: FaGithub },
  { label: "Linkedin", href: "https://linkedin.com", Icon: FaLinkedin },
  // ... and so on for other buttons
];
```

You can modify three properties for each item:

- **`label`**: The text displayed on the button.
- **`href`**: The URL the button links to.
- **`Icon`**: The pre-installed icon to display next to the label.

#### 2\. Customizing Profile and Styling

The `DevDashConfig` object controls your profile details and global styling.

**File: `src/config.ts`**

```typescript
export const DevDashConfig: DevDashConfigRules = {
  AvatarUrl: "https://avatars.githubusercontent.com/u/155681266?v=4",
  UserName: "Raul Mora",
  RoundedOptions: "rounded-lg",
  AvatarRoundedOptions: "rounded-lg",
};
```

| Property                   | Description                                               |
| :------------------------- | :-------------------------------------------------------- |
| **`AvatarUrl`**            | Change this link to use your own **profile picture URL**. |
| **`UserName`**             | Your name or handle, displayed above the buttons.         |
| **`AvatarRoundedOptions`** | Controls the **roundness of your profile image**.         |
| **`RoundedOptions`**       | Controls the **roundness of the main link buttons**.      |

---

### Themes

DevTree supports several built-in themes for quick styling changes.

| Available Themes | Description                      |
| :--------------- | :------------------------------- |
| **`white`**      | Light theme                      |
| **`dark`**       | Dark theme                       |
| **`system`**     | Follows the user's OS preference |
| **`valentine`**  | Pink color scheme                |
| **`aqua`**       | Blue color scheme                |
| **`tree`**       | Green color scheme               |

#### How to Change the Default Theme

To set a new default theme, you need to modify the `defaultTheme` prop within the `<ThemeProvider>` component in your main application file.

**File: `src/pages/App.tsx`**

```tsx
import { ThemeProvider } from "@/components/theme/theme-switcher";
// ... other imports

export function App() {
  return (
    <div className="pb-16">
      {/* Change the value of defaultTheme to one of the available options */}
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {/* ... component structure */}
      </ThemeProvider>
    </div>
  );
}
```

---

### Available Icons

DevTree comes pre-configured with the following icons, ready to use in `src/config.ts`. You must import them from `import { ... } from "@/assets/icons";`.

- `FaGithub`
- `FaLinkedin`
- `FaX` (Twitter)
- `FaTiktok`
- `FaInstagram`
- `FaBluesky`
- `FaYoutube`
- `FaSpotify`
- `FaPatreon`
- `FaGitlab`
- `FaFiverr`
- `FaPortfolio`
- `FaTwitch`
- `FaWeb` (General Website)

**_Note:_** _New icons are always being added\!_
