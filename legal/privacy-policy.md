# Privacy Policy

**Last updated:** 2026-11-12

## Permissions

| Permission | Required | Purpose | Data handling | If denied |
| --- | --- | --- | --- | --- |
| Internet | Yes | Sign-in, sync health records, consultation and tongue analysis, security | Data sent to our servers and, with your consent, to third-party AI APIs we describe below | Core online features do not work |
| Camera | No | Take a tongue photo when you choose that option | Photo used only after you confirm; not recorded with audio | You can still pick an existing photo |
| Photos / gallery | No | Select a tongue photo or optional avatar | Only the image you select is used; we do not scan the whole library | Avatar or gallery-based tongue upload unavailable |
| Device sign-in (e.g. Sign in with Apple) | Yes for account features | Create and secure your account | We receive platform identifiers and auth tokens, not your platform password | Account-based features unavailable |
| Local authentication (e.g. Face ID / Touch ID) | No | Optional lock when opening Huloloo App (shipped and available in settings) | Biometrics are verified only on your device by the OS; we do not receive or store biometric templates | Optional app lock unavailable |
| Contacts, microphone, location | No | — | Not requested | — |

## Data

| Data type | Collected | Purpose | Retention |
| --- | --- | --- | --- |
| Account sign-in data | Yes | Account, security, linking your records | Until account deletion |
| Apple Sign In email | **No** | — | **Not collected or stored** |
| Optional avatar | If you upload | Display profile image | Until you delete or remove account |
| Health text and records you enter | Yes | Consultation, records, analysis | Until you delete or remove account; active systems within **30** days after verified deletion request |
| Optional date of birth | If you use cultural reference feature | Five-elements cultural reference only | Same as other records |
| Tongue photos and derived features | If you submit | Tongue analysis and history | Same as other records |
| AI-generated replies and reports | Yes | Show results and history | Same as other records |
| Operational / security logs | Yes | Security, abuse prevention, troubleshooting | **30 days** — authentication, abuse/rate-limit, and diagnostics (see Section 8); not full health content |
| Support email you send us | If you contact us | Respond to requests | As needed for the request |
| Advertising ID / ad tracking | No | — | — |
| HealthKit / platform health databases | No | — | — |

## 1. General provisions

- **Yaobuer (Shanghai) Biotechnology Co., Ltd.** (“we”, “us” or “our”) operates **Huloloo App**, a mobile wellness and health-record tool. Our registered address is No. 700 Yishan Road, Xuhui District, Shanghai, China. This Privacy Policy explains what we collect, how we use it, how we share it, how long we keep it, and your choices.
- Huloloo App includes account sign-in, wellness consultations, tongue-image analysis, health records and related support on the platforms and in the territories where we distribute it.
- **Distribution:** Huloloo App is **not offered on the China mainland App Store**. This English policy at **https://en.huloloo.com/privacy/** applies where you lawfully obtain Huloloo App.
- **Sensitive information:** Consultation text, tongue photos and inferred health characteristics may be sensitive personal data. Removing a name does not make them anonymous. Do not submit IDs, others’ health data, full-face photos unrelated to the service, or unrelated personal content.
- By using Huloloo App, you acknowledge this Policy. If you do not agree, stop using Huloloo App.
- We may update this Policy. Material changes will be notified in Huloloo App or on our website; the “Last updated” date will change. Uses that need new consent will not rely on continued use alone.

## 2. What we collect and what we do not collect

**We collect** the categories in the table above when you use the related feature.

**We do not collect** Apple Sign In **email addresses** (even when Apple’s token includes an email claim). We do not collect data for advertising tracking, selling data to brokers, or building marketing profiles from your health content.

**We do not** request your full photo library, contacts, microphone, calendars, SMS, or precise location. Network use still involves IP addresses.

**Platform sign-in:** On Apple devices, Sign in with Apple gives us an app-scoped identifier and auth credentials—not your Apple password. We use optional display-name claims only to set a nickname when you have none; we **do not store your email** from Apple.

**On your device:** Language, theme, optional Face ID / Touch ID lock preferences, and local drafts may stay on the device. Clearing local data is not the same as deleting server data.

## 3. Platform permissions we request

We ask for permissions in context when a feature needs them. You can change or revoke them in device settings. Revoking camera or photo access does not delete content already uploaded (see Section 10).

**Biometric app lock (Face ID / Touch ID):** When you turn this on in Huloloo App settings, the operating system verifies you before showing content. We do not receive biometric data or templates—only a success/failure signal from the OS APIs you control.

## 4. AI processing and third-party services

Consultation text is processed on systems we manage (including retrieval-augmented generation). **Original consultation text and structured health conclusions are also sent to DeepSeek’s official API** to organize and format replies. Tongue photos are uploaded to our cloud environment and sent to **Qwen’s official API**; if Qwen cannot complete processing, **GLM receives the original photo** as a fallback.

| Recipient | Entity | Model | Data sent | Region / retention |
| --- | --- | --- | --- | --- |
| DeepSeek | Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd. | deepseek-v4-flash | Consultation text and structured conclusions | China — see [DeepSeek Privacy Policy](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html) |
| Alibaba Cloud Qwen | Alibaba Cloud Computing Ltd. | qwen3-vl-plus | Tongue photos and analysis instructions | China — default inference retention up to **30 days** unless law or security requires longer; see [Alibaba Cloud Model Studio policy](https://www.alibabacloud.com/help/en/model-studio/data-retention-policy) |
| Zhipu GLM | Beijing Zhipu Huazhang Technology Co., Ltd. | glm-4v-flash | Tongue photo when Qwen fails | China — minimum necessary retention; optional no-retention modes per provider terms |

API calls do not attach your sign-in identifier or avatar. Text and images may still identify you.

**Separate consent:** The first time consultation content or tongue photos go to third-party AI, we explain recipient, data and purpose and ask for your affirmative consent. Camera permission and accepting the Terms are not substitutes for that consent. You may refuse or withdraw in Huloloo App; features that depend on that processing will stop.

## 5. How we use data

- Provide features you request (records, consultations, tongue analysis, avatar).
- Operate, secure and improve Huloloo App, prevent abuse, and meet legal obligations.
- We **do not sell** personal information. We **do not** use health content for ads or public display.
- We **do not** use your consultations, tongue photos, records or results to train or fine-tune our own models for other users. Where our contracts and provider settings allow, we configure third-party AI services **not to use your content for model training**; **caching, abuse prevention, billing and provider-specific retention may still apply** (see Section 4 and each provider’s policy).

**Legal bases (where required):** Basic service under our agreement with you; sensitive health processing and third-party AI under your **explicit consent**; legal obligations under applicable law.

**Infrastructure:** We use **Tencent** cloud services for storage and networking in **China** (primary and backup). See [Tencent Cloud privacy documentation](https://cloud.tencent.cn/document/product/301/11470). Platform stores (Apple, Google, etc.) provide distribution and sign-in under their own policies.

## 6. Health content and your responsibilities

- Huloloo App provides **general wellness information**, not diagnosis or treatment. AI output can be wrong or incomplete.
- Do not submit emergency medical information expecting clinical response. Seek qualified care and local emergency services when needed.
- You are responsible for what you enter and share, including through the device share feature.

## 7. Minors

Huloloo App is for people **18 years or older**. We do not knowingly build health profiles for children. If we learn we collected a minor’s data by mistake, we will stop processing and delete it.

## 8. Storage, retention and transfers

Health records and tongue photos are stored on servers we manage in **China** (primary and backup). We do not sync health records through platform cloud backup (e.g. iCloud) unless we tell you otherwise in Huloloo App.

We retain data until you delete content or your account, or we stop the service—not on a fixed automatic expiry. After a **verified account or data deletion request**, active systems are targeted within **30 days**; backups within **30 days** where technically feasible.

**Security logs** include authentication events (sign-in success/failure, token refresh), abuse and rate-limit signals, and operational diagnostics (IP address, request time, endpoint status, app version). They **do not** store full consultation text or tongue images. Retention is **30 days** unless an investigation or legal duty requires longer.

**Cross-border processing:** Your personal data (including chat messages and tongue images) is stored on servers located in the People's Republic of China. If you use Huloloo App from outside China, this may involve a cross-border transfer to that location; we provide additional notices and obtain separate consent where applicable law requires. Distribution through an overseas App Store does not mean data is processed only in the United States.

## 9. Security

We use measures appropriate to the risk, including HTTPS, access controls and least privilege. Credentials use secure storage on the device. Optional Face ID / Touch ID adds a device-level lock before Huloloo App content is shown. No system is perfectly secure; we will notify users and authorities when the law requires.

## 10. Your rights and choices

- **In Huloloo App (implemented):** view records, delete records or photos, delete your account, and withdraw consultation AI or tongue AI consent where offered.
- Account deletion revokes authorizations we hold for Huloloo App; it does not delete your Apple, Google or other platform account. Sign-out or uninstall does not delete cloud records until you delete them or your account.
- For access, correction, deletion, portability, restriction, objection or questions, email us below. We respond within **32** days where applicable law allows.

## 11. Changes

This Policy is published at **https://en.huloloo.com/privacy/**. Huloloo App opens this URL in your default browser when you choose Privacy settings or sign-in links.

## Contact

For privacy requests and questions: [huloloo@huloloo.com](mailto:huloloo@huloloo.com)
