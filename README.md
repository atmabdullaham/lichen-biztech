Here is the complete, A-to-Z Git workflow guideline tailored exactly to your team's environment. You can copy and paste this entire block directly into your `README.md` or a `CONTRIBUTING.md` file.

---

````markdown
# 🌿 Lichen Development Guide & Git Workflow

Welcome to the Lichen Next.js project repository! To ensure our team (Abdullah, Rakib, and future developers) can build fast, avoid merge conflicts, and keep the live website stable, we strictly follow the Git workflow outlined below.

Please read this document completely before writing any code.

---

## 🏗️ 1. Our Branching Architecture

We use a protected, dual-branch system. **No developer is allowed to commit or merge directly into `main` or `development` via the terminal.** \* **`main` (Production 🟢):** The locked, stable branch. This represents what is currently live on `lichenbts.com`. Code only gets here via an official Release Pull Request.

- **`development` (Integration 🟡):** The shared team workspace. All daily work, new components (shadcn/ui), and bug fixes are merged here first for testing.
- **Feature Branches (Active Work 🔵):** Temporary branches where you write your actual code. You will create a new one for every specific task and delete it when you are done.

### Branch Naming Convention

Do not use a permanent personal branch (like `rakib-dev`). Instead, name your branch based on who you are and what you are doing:

- `[name]-[feature/fix]-[description]`
- _Examples:_ `rakib-feature-hero-section`, `abdullah-fix-navbar-mobile`, `rakib-add-shadcn-button`

---

## 🚀 2. The Daily Developer Workflow (A to Z)

Follow these exact steps every time you sit down to work on a new task.

### Step A: Sync with the Team Workspace

Before you write a single line of code, ensure your local machine has the latest updates from your teammates. **Always pull from `development`, never from `main`.**

```bash
git checkout development
git pull origin development
```
````

### Step B: Create Your Task Branch

Create your temporary feature branch off of the updated `development` branch.

```bash
git checkout -b yourname-feature-description

```

### Step C: Write Code & Commit Often

Build your Next.js components, add your shadcn/ui features, and make small, logical commits. Write clear commit messages so your team knows what you did.

```bash
git add .
git commit -m "Added responsive shadcn Navbar and mobile Sheet component"

```

### Step D: The "Conflict Prevention" Sync (Crucial)

While you were working, Abdullah or Rakib might have finished a task and merged it into `development`. You need to pull their changes into your branch _before_ you push your code online.

```bash
# 1. Go back to development and get the latest code
git checkout development
git pull origin development

# 2. Go back to your feature branch
git checkout yourname-feature-description

# 3. Bring the new team updates into your workspace
git merge development

```

_(Note: If you get a merge conflict here, VS Code will highlight it. Fix the conflict in your own branch, save the files, `git add .`, and `git commit`)._

### Step E: Push & Create a Pull Request (PR)

Once your code is working and synced, push your branch to the cloud.

```bash
git push origin yourname-feature-description

```

- **Stop using the terminal here.** \* Go to GitHub/GitLab.
- Click **New Pull Request**.
- Set the base to `development` and the compare branch to your feature branch.
- Tag your teammate to review your code. Once approved, click "Merge"!

---

## 🚢 3. Releasing to Production (The `main` branch)

When the `development` branch has enough tested features and is ready to go live on the actual Lichen website, the Lead Developer will handle the release.

1. **Create a Release PR:** On GitHub/GitLab, create a Pull Request from `development` into `main`.
2. **Review & Merge:** Review the final code and click Merge. (This will typically trigger Vercel to deploy the live site).
3. **Sync Local Machines:** After the website is updated, every developer must run these commands to update their local computers:

```bash
git checkout main
git pull origin main
git checkout development
git merge main

```

---

## 🛡️ 4. The Golden Rules

1. **Talk First, Code Second:** If Abdullah is working on `app/page.js`, Rakib should work on something else (like `app/about/page.js`). Never work on the exact same file at the exact same time.
2. **Ignore `main` during the week:** For your day-to-day coding, pretend `main` doesn't exist. Live entirely in `development` and your feature branches.
3. **Delete Old Branches:** After your PR is merged, delete your feature branch on GitHub/GitLab, and delete it locally (`git branch -d yourname-feature-description`) to keep your terminal clean.

```

```
