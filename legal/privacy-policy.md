# Privacy Policy

**Last updated:** 2026-11-12

## Permissions

| Permission | Required | Purpose | Data handling | If denied |
| --- | --- | --- | --- | --- |
| Internet | Yes | Sign-in, sync health records, consultation and tongue analysis, security | Data sent to our servers and, with your consent, to third-party AI APIs we describe below | Core online features do not work |
| Camera | No | Take a tongue photo when you choose that option | Photo used only after you confirm; not recorded with audio | You can still pick an existing photo |
| Photos / gallery | No | Select a tongue photo or optional avatar | iOS controls the access you grant. Huloloo reads only the image you select to upload | Avatar or gallery-based tongue upload unavailable |
| Device sign-in (e.g. Sign in with Apple) | Yes for account features | Create and secure your account | We receive platform identifiers and auth tokens, not your platform password | Account-based features unavailable |
| Local authentication (e.g. Face ID / Touch ID) | No | Optional lock when opening Huloloo App (shipped and available in settings) | Biometrics are verified only on your device by the OS; we do not receive or store biometric templates | Optional app lock unavailable |
| Contacts, microphone, location | No | — | Not requested | — |

## Data

| Data type | Collected | Purpose | Retention |
| --- | --- | --- | --- |
| Account sign-in data | Yes | Account, security, linking your records | Until account deletion |
| Apple Sign In email | **No** | — | **Not collected or stored** |
| Optional profile information | If you enter a name, provide a birth year, or select an avatar | Display the name and image you choose and process submitted profile details | Until removed or the account is deleted |
| Consultation messages and health records you enter | Yes | Consultation, records, analysis and history | Kept long term until you delete the relevant records or your account |
| Optional date of birth | If you use cultural reference feature | Five-elements cultural reference only | Same as other records |
| Tongue photos and derived features | If you submit | Tongue analysis and history | Same as other records |
| AI-generated replies and reports | Yes | Show results and history | Same as other records |
| Operational / security logs | Yes | Security, abuse prevention, troubleshooting | As needed for those purposes or to meet legal obligations |
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

We use the system photo picker for the tongue photo or profile image you choose. iOS controls photo permissions and lets you change the access you grant. Huloloo uses only the image you select to upload. We do not scan your library or request contacts, microphone, calendars, SMS, or precise location. Network use still involves IP addresses.

**Platform sign-in:** On Apple devices, Sign in with Apple gives us an app-scoped identifier and auth credentials—not your Apple password. You can enter a display name and choose an optional profile photo. If an Apple display name is provided, we use it only to set a nickname when you have none. We **do not store your email** from Apple.

**On your device:** Language, theme, optional Face ID / Touch ID lock preferences, and local drafts may stay on the device. Clearing local data is not the same as deleting server data.

## 3. Platform permissions we request

We ask for permissions in context when a feature needs them. You can change or revoke them in device settings. Revoking camera or photo access does not delete content already uploaded (see Section 10).

**Biometric app lock (Face ID / Touch ID):** When you turn this on in Huloloo App settings, the operating system verifies you before showing content. We do not receive biometric data or templates—only a success/failure signal from the OS APIs you control.

## 4. AI processing and third-party services

Consultation text is processed on systems we manage, including retrieval-augmented generation. With your permission, we send consultation text, relevant chat history and structured health findings to DeepSeek to produce replies and reports. DeepSeek also helps write daily summaries and Five Elements explanations when you use those features. Our servers prepare the selected tongue photo and run preliminary image checks. Only the final analysis sends the prepared photo to Alibaba Cloud Qwen.

| Recipient | Entity | Model | Data sent | Region / retention |
| --- | --- | --- | --- | --- |
| DeepSeek | Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd. | deepseek-v4-flash | Consultation text, relevant chat history and health findings. Daily check-in answers, recent health feedback and calculated results. Birth date and calculated Five Elements results. | China — see [DeepSeek Open Platform Terms of Service](https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html) |
| Alibaba Cloud Qwen | Alibaba Cloud Computing Ltd. | qwen3-vl-plus | Prepared tongue photo and analysis instructions for the final analysis | China — provider retention depends on the applicable API terms and configuration. See [Alibaba Cloud Model Studio data handling FAQ](https://help.aliyun.com/zh/model-studio/faq-about-alibaba-cloud-model-studio) |

API calls do not attach your sign-in identifier or avatar. Text and images may still identify you.

**Separate consent:** Before a feature first sends data to third-party AI, we describe the recipient, data and purpose and ask you to confirm. You can decline or withdraw permission for consultation and reports, tongue analysis, daily check-ins, and Five Elements in Data Management. Choices are stored on this device. Withdrawal stops future transfers for that feature on this device. You can still view and delete saved records.

## 5. How we use data

- Provide features you request, including records, consultations, tongue analysis and profile photos. When we generate a new health summary, we combine current information with available prior tongue analyses, daily records and follow-up answers.
- Operate, secure and improve Huloloo App, prevent abuse, and meet legal obligations.
- We **do not sell** personal information. We **do not** use health content for ads or public display.
- We **do not** use your consultations, tongue photos, records or results to train or fine-tune our own models for other users. Where our contracts and provider settings allow, we configure third-party AI services **not to use your content for model training**; **caching, abuse prevention, billing and provider-specific retention may still apply** (see Section 4 and each provider’s policy).

**Legal bases (where required):** Basic service under our agreement with you; sensitive health processing and third-party AI under your **explicit consent**; legal obligations under applicable law.

**Infrastructure:** We use **Tencent** cloud services for storage and networking in **China** (primary and backup). See [Tencent Cloud privacy documentation](https://cloud.tencent.cn/document/product/301/11470). Apple provides iOS distribution and Sign in with Apple under its own policies. Stores for future platforms may apply their own policies.

## 6. Health content and your responsibilities

- Huloloo App provides **general wellness information**, not diagnosis or treatment. AI output can be wrong or incomplete.
- Do not submit emergency medical information expecting clinical response. Seek qualified care and local emergency services when needed.
- You are responsible for what you enter and share, including through the device share feature.

## 7. Minors

Huloloo App is for people **18 years or older**. We do not knowingly build health profiles for children. If we learn we collected a minor’s data by mistake, we will stop processing and delete it.

## 8. Storage, retention and transfers

Health records and tongue photos are stored on servers we manage in **China** (primary and backup). The App retrieves your cloud records from our servers. Your device settings control iOS device backups.

We keep your records, including consultation messages, long term so you can review them and use your history. After you confirm a deletion in the App, we delete the selected data from active systems during that request. Account deletion also removes the account and its associated active records. Backup copies expire under their separate retention schedules. AI providers handle copies they receive under the applicable API terms.

**Operational and security logs** may include authentication events, abuse and rate-limit signals, IP addresses, request times and statuses, and model usage metrics. We keep these logs for troubleshooting, security, and applicable legal requirements.

**Cross-border processing:** Your personal data (including chat messages and tongue images) is stored on servers located in the People's Republic of China. If you use Huloloo App from outside China, this may involve a cross-border transfer to that location; we provide additional notices and obtain separate consent where applicable law requires. Distribution through an overseas App Store does not mean data is processed only in the United States.

## 9. Security

We use measures appropriate to the risk, including HTTPS, access controls and least privilege. Credentials use secure storage on the device. Optional Face ID / Touch ID adds a device-level lock before Huloloo App content is shown. No system is perfectly secure; we will notify users and authorities when the law requires.

## 10. Your rights and choices

- In **Data Management**, you can delete conversations, tongue photos and analyses, health summaries, daily records, Five Elements data, or your profile photo. You can also delete your account or withdraw consent for each AI feature.
- For account deletion on iOS, confirm with the Apple account you used to sign in. We revoke the Sign in with Apple authorization for Huloloo and delete your Huloloo account and associated data from active systems. Signing out or uninstalling leaves your cloud records available until you delete them or your account.
- For access, correction, deletion, portability, restriction, objection or questions, email us below. We respond within the applicable legal deadlines.

## 11. Changes

This Policy is published at **https://en.huloloo.com/privacy/**. Huloloo App opens this URL in your default browser when you choose Privacy settings or sign-in links.

## Contact

For privacy requests and questions: [huloloo@huloloo.com](mailto:huloloo@huloloo.com)
