# **GDI (Google Daily Insights) - Public Share Edition 🚀**

### **Project Vision:**
*   **Empower individuals with automated, personalized insights from their digital footprint.**
*   **Drive self-growth and informed decision-making through actionable recommendations.**
*   **Foster an open-source community for collaborative development and innovation.**
*   **賦予個人從其數位足跡中獲得自動化、個人化洞察的能力。 通過可操作的建議，推動自我成長和明智的決策。 培養一個開源社區，以促進協作開發和創新。**

###  **Key Features & Competitive Advantages:**

*   **Automated Data Integration:** Seamlessly gathers data from various Google services and user-provided files.
    *   Google Services: Gmail, Calendar, Drive, Google Fitness (steps, heart points via Google Fit API).
    *   User Imports: Feedly OPML, Bookmarks HTML, YouTube Watch History (JSON/HTML). (Chrome history planned for future).
    *   Note on Financial Data: While the script fetches news about financial indices (e.g., S&P 500 via Google News RSS), direct extraction of live index values and exact percentage changes from public finance websites is not currently implemented due to limitations in reliably parsing such data.
    *   自動資料整合：無縫地從各種 Google 服務和使用者提供的檔案收集資料。

*   **Rule-Based Analysis & Keyword Extraction:** Uses rule-based analysis and keyword extraction. (Future versions may explore advanced AI like Google Gemini).
    *   Email prioritization based on keywords and sender.
    *   Calendar event analysis.
    *   Content filtering and personalized recommendations based on extracted keywords.
    *   基於規則的分析和關鍵字提取：使用基於規則的分析和關鍵字提取。（未來版本可能會探索像 Google Gemini 這樣的進階 AI）。

*   **Actionable Insights & Recommendations:** Provides personalized daily reports and actionable suggestions based on user preferences and data analysis.
    *   可操作的洞察和建議：根據使用者偏好和資料分析，提供個人化的每日報告和可操作的建議。

*   **Privacy & Security:**
    *   No data storage on external servers.
    *   All data processing done locally within the user's Google account.
    *   隱私和安全：不將資料儲存在外部伺服器上。所有資料處理都在使用者 Google 帳戶內本地完成。

*   **Open-Source Collaboration:** Encourages community contributions to expand features and functionality.
    *   開源協作：鼓勵社區貢獻，以擴展特性和功能。

### **Target Audience:**
*   Information workers seeking to boost productivity and decision-making.
*   Individuals passionate about personal growth and self-optimization.
*   Tech-savvy users comfortable with Google services and App Script.
*   **目標受眾：希望提高生產力和決策能力的資訊工作者。熱衷於個人成長和自我優化的個人。精通 Google 服務和 App Script 的科技愛好者。**

### **Architecture Overview:**

**Modules:**

*   **Data Collection Module:** Gathers data from various sources through authorized APIs and Drive imports.
    *資料收集模組：透過授權的 API 和雲端硬碟匯入從各種來源收集資料。

*   **Data Processing Module:**  Filters, cleans, and categorizes collected data. Extracts keywords.
    *資料處理模組：過濾、清理和分類收集到的資料。提取關鍵字。

*   **Report Generation Module:** Creates personalized reports in Markdown format.
    *報告生成模組：以 Markdown 格式建立個人化報告。

*   **Notification Module:** Sends reports via Gmail and can save them to a Google Document. The Google Document can be useful for reference or manual integration with Google Keep.
    *通知模組：透過 Gmail 傳送報告，並可將其儲存到 Google 文件中。Google 文件可用於參考或手動整合到 Google Keep。

###  **Development Roadmap (Minimum Viable Product):**

**Phase 1: Core Functionality (Largely Complete)**
*   Establish data collection from Gmail, Calendar, Google News (via RSS), Google Fitness.
*   Implement keyword extraction for focus identification.
*   Implement basic scam detection in emails.
*   Generate daily reports and send via Gmail / save to Google Doc.
*   Process user-imported Feedly OPML, Bookmarks HTML, and YouTube Watch History.
*   階段 1：核心功能 (大部分完成)
    * 建立從 Gmail、日曆、Google 新聞 (透過 RSS)、Google Fitness 收集資料的功能。
    * 實作關鍵字提取以識別焦點。
    * 實作電子郵件中的基本詐騙偵測。
    * 生成每日報告並透過 Gmail 傳送 / 儲存到 Google 文件。
    * 處理使用者匯入的 Feedly OPML、書籤 HTML 和 YouTube 觀看歷史記錄。

**Phase 2: Advanced Features & Personalization**
*   Integrate Chrome history imports (processing logic).
*   Expand analysis capabilities, potentially exploring Google Gemini for summarization or advanced insights.
*   Enable more user customization of report content and notification settings.
*   階段 2：進階功能和個人化
    * 整合 Chrome 歷史記錄匯入 (處理邏輯)。
    * 擴展分析功能，可能探索 Google Gemini 以進行摘要或進階洞察。
    * 允許使用者更進一步自訂報告內容和通知設定。

**Phase 3: Open Source & Community Building**
*   Release GDI as an open-source project on a platform like GitHub.
*   Foster community contributions for new features, integrations, and language support.
*   階段 3：開源和社群建立
    * 在 GitHub 等平台上將 GDI 作為開源專案發佈。
    * 促進社群為新功能、整合和語言支援做出貢獻。

### **Technology Stack:**
*   Google Apps Script (JavaScript)
*   Google Apps Script Services:
    *   `GmailApp` ([Docs](https://developers.google.com/apps-script/reference/gmail/gmail-app))
    *   `CalendarApp` ([Docs](https://developers.google.com/apps-script/reference/calendar/calendar-app))
    *   `DriveApp` ([Docs](https://developers.google.com/apps-script/reference/drive/drive-app))
    *   `DocumentApp` ([Docs](https://developers.google.com/apps-script/reference/document/document-app))
    *   `SpreadsheetApp` ([Docs](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app))
    *   `UrlFetchApp` ([Docs](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app))
    *   `XmlService` ([Docs](https://developers.google.com/apps-script/reference/xml-service/xml-service))
    *   `PropertiesService` ([Docs](https://developers.google.com/apps-script/reference/properties/properties-service))
    *   `ScriptApp` ([Docs](https://developers.google.com/apps-script/reference/script/script-app))
*   Google Fitness API (`Fitness` Advanced Service) ([Docs](https://developers.google.com/apps-script/advanced/fitness))
*   Google Gemini AI API (potential future enhancement)

### **Installation & Setup:**
*   Create a new Google Apps Script project.
*   Copy and paste the GDI code from `GDI.gs` into the project's script editor.
*   Configure the project settings as instructed in the "User Configuration" section below.
*   **Enable the Google Fitness API:** If you want to collect health data, enable the Google Fitness API in your script's associated Google Cloud Platform (GCP) project. See [Google's guide on Advanced Services](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services) for more details.
*   Set up a time-based trigger to run the `main` function automatically (e.g., daily at desired times). You can also run `setupTriggers()` once to create triggers based on `USER_SETTINGS.DATA_COLLECTION_TIMES`.
* 安裝：
* 建立一個新的 Google Apps Script 專案。
* 將 `GDI.gs` 中的 GDI 程式碼複製並貼上到專案的指令碼編輯器中。
* 根據下面的「使用者組態」部分中的說明設定專案設定。
* **啟用 Google Fitness API：** 如果您想收集健康數據，請在指令碼關聯的 Google Cloud Platform (GCP) 專案中啟用 Google Fitness API。有關更多詳細資訊，請參閱 [Google 的進階服務指南](https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services)。
* 設定基於時間的觸發器以自動執行 `main` 函數（例如，每天在所需時間）。您也可以執行一次 `setupTriggers()` 以根據 `USER_SETTINGS.DATA_COLLECTION_TIMES` 建立觸發器。

## User Configuration

You can customize the script's behavior by modifying the `USER_SETTINGS` and `CONFIG` objects at the top of the `GDI.gs` file.

### `USER_SETTINGS`
*   `DATA_COLLECTION_TIMES`: Array of strings (HH:mm format, 24-hour) specifying when the script should run.
    *   Example: `['06:00', '12:00', '18:00', '23:00']`
*   `REPORT_LANGUAGE`: String that controls the language of generated report titles and section headers.
    *   Supported: `'en-US'` (English), `'zh-TW'` (Traditional Chinese).
    *   Default (if invalid language set): `'en-US'`.
*   `LOCATION`: String used for fetching location-specific news and weather (e.g., 'Mountain View', 'Taipei'). This is used in Google News searches.
*   `REPORT_OUTPUT_TARGETS`: Array of strings specifying where the report should be sent.
    *   Options: `'EMAIL'`, `'GOOGLE_DOC'`.
    *   Example: `['EMAIL', 'GOOGLE_DOC']` to send to both.

### `CONFIG` (Key Options)
*   `LOG_SHEET_NAME`: String, the name of the Google Sheet used for logging errors and script activity.
*   `GOOGLE_DOC_REPORT_NAME`: String, the name of the Google Document used if `'GOOGLE_DOC'` is an output target. The script will overwrite this document's content with the latest report.
*   `NEWS_ITEM_LIMIT`: Number, max news items to fetch for general news categories from Google News RSS.
*   `FEEDLY_MAX_FEEDS_TO_FETCH`: Number, max feeds to process from an imported Feedly OPML file.
*   `FEEDLY_MAX_ITEMS_PER_FEED`: Number, max articles to fetch from each processed Feedly feed.
*   `BOOKMARK_MAX_ITEMS_TO_PROCESS`: Number, max bookmarks to extract from an imported HTML bookmarks file.
*   `YOUTUBE_MAX_ITEMS_TO_PROCESS`: Number, max YouTube history items to extract from an imported file.
*   `USER_DATA_IMPORT_DRIVE_BASE_PATH`: String, the base path in Google Drive where the script looks for user-imported data files (e.g., `GDI_Data/Imports/`).

### **Contribution Guidelines:**
*   Follow the project's coding style and best practices.
*   Submit bug reports and feature requests through the issue tracker (if a public repository is set up).
*   Contribute code through pull requests with clear descriptions of changes.
* 協作：
* 遵循專案的程式碼風格和最佳實務。
* 透過問題追蹤器提交錯誤報告和功能請求（如果已設定公開儲存庫）。
* 透過拉取請求貢獻程式碼，並清楚說明變更。

## User Data Imports (Optional)

This section explains the manual process for importing data that GDI can use.

### Chrome Browsing History
*   **Instructions:** You can export your Chrome history via Google Takeout (select only Chrome History). Download the `Takeout.zip`, extract it, and find the `BrowserHistory.json` file.
*   Upload this `BrowserHistory.json` file to your Google Drive in the following folder: `[USER_DATA_IMPORT_DRIVE_BASE_PATH]/Chrome/` (e.g., `GDI_Data/Imports/Chrome/`).
*   **Status:** Processing logic for this file is a feature for future enhancement.

### YouTube Watch History
*   **Instructions:** You can export your YouTube watch history via Google Takeout (select only YouTube Watch History). Download the `Takeout.zip`, extract it, and find the `watch-history.json` or `watch-history.html` file.
*   Upload the relevant history file to your Google Drive in the following folder: `[USER_DATA_IMPORT_DRIVE_BASE_PATH]/YouTube/` (e.g., `GDI_Data/Imports/YouTube/`).
*   **Status:** Basic processing is implemented for both `watch-history.json` (preferred, includes watched timestamps) and `watch-history.html` files. The script will extract video titles and links (up to `YOUTUBE_MAX_ITEMS_TO_PROCESS`).

### Feedly RSS Subscriptions (OPML)
*   **Instructions:** In Feedly, go to Settings > Organization > OPML Export (or a similar path). Download your subscriptions as an OPML file (e.g., `feedly.opml`).
*   Upload this `.opml` file to your Google Drive in the following folder: `[USER_DATA_IMPORT_DRIVE_BASE_PATH]/Feedly/` (e.g., `GDI_Data/Imports/Feedly/`).
*   **Status:** Basic processing is implemented. The script will fetch a limited number of articles (configurable via `FEEDLY_MAX_FEEDS_TO_FETCH` and `FEEDLY_MAX_ITEMS_PER_FEED`) from the feeds listed in this file.

### Bookmarks (HTML)
*   **Instructions:** Most browsers allow you to export your bookmarks as an HTML file (e.g., `bookmarks.html`).
*   Upload this HTML bookmarks file to your Google Drive in the following folder: `[USER_DATA_IMPORT_DRIVE_BASE_PATH]/Bookmarks/` (e.g., `GDI_Data/Imports/Bookmarks/`).
*   **Status:** Basic processing is implemented. The script will extract links and titles from this file (up to `BOOKMARK_MAX_ITEMS_TO_PROCESS`).

**General Note:** Ensure the filenames are consistent (e.g., `BrowserHistory.json`, `feedly.opml`, `bookmarks.html`, `watch-history.json`, or `watch-history.html`). The script will look for these specific names in the respective folders. Basic processing for Feedly OPML (fetching limited articles), Bookmarks HTML (extracting links and titles), and YouTube Watch History (extracting video details) is now implemented. Chrome history processing remains a feature for future enhancement.

## 結語
* GDI is committed to becoming an indispensable tool in individuals' digital lives, helping them manage information more effectively, make informed decisions, and continue to grow personally. We believe that through the power of open source and the joint efforts of the community, GDI can continue to evolve and meet the growing needs of users.
* GDI 致力於成為個人數位生活中不可或缺的工具，協助使用者更有效地管理資訊、做出明智的決策，並持續自我成長。 我們相信透過開源的力量和社群的共同努力，GDI 能夠不斷進化，滿足使用者日益增長的需求。

## Contact & Settlement | 聯絡與結算
Email：sovereign.logic.sys@gmail.com
PayPal-supported settlement available after verified review request.
若有收穫，歡迎透過 PayPal 隨時進行無償支助。
Greater Alpha, Greater Edge Responsibility 👉 https://paypal.me/SLSTS
