Learn more: [Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)

## Netlify Deployment Options for Clients

There are multiple ways to let clients deploy from your private GitHub repository to their Netlify account:

### Option 1: Add Clients as GitHub Collaborators (Recommended)

The simplest approach is to add clients as collaborators to your private repository:

1. Client creates both GitHub and Netlify accounts
2. You add the client to your repository:
   - Go to repository Settings > Collaborators > Add people
   - Enter client's GitHub username or email
   - Set permission level to "Read" (minimum required for deployment)
3. Client accepts the invitation via email
4. Client connects the repository to their Netlify account

**Pros:**
- Simple setup with no need to access each other's accounts
- Client owns their Netlify account, you maintain repository ownership
- Client can see the code they're deploying (transparency)
- Easier troubleshooting if deployment issues occur

**Cons:**
- Client can view your code (though they can't modify it with read-only access)
- May raise IP concerns if code confidentiality is critical

### Option 2: Connect Repository to Client's Netlify Account

If you want to keep code completely private from the client:

1. Client creates a Netlify account
2. Client provides you with temporary access to their Netlify account
3. You log in to their Netlify account and set up the connection to your private GitHub repository
4. You configure the deployment settings
5. You log out of their Netlify account

**Pros:**
- Client cannot see or access your code
- Complete code privacy
- Client still owns and manages their Netlify account

**Cons:**
- Requires temporary access to client's Netlify account
- More complex setup
- Client may have difficulty troubleshooting without seeing code

### Option 3: Netlify Team Collaboration

For ongoing client relationships:

1. You create the Netlify site under your account
2. Add the client to your Netlify team with appropriate permissions
3. You maintain control of both GitHub and Netlify
4. Client can access the Netlify dashboard for their site

**Pros:**
- Complete code privacy
- Full control over deployment settings
- Client can still access Netlify features

**Cons:**
- You manage the Netlify billing
- Client doesn't have full ownership of their Netlify account
- More complex permissions management

## Netlify Deployment Guide 