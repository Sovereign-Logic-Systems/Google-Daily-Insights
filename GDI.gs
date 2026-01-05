// ==================== Global Variables ====================
let executionErrorSummary = []; // To store a summary of errors during execution

// ==================== LOCALIZED STRINGS ====================
const LOCALIZED_STRINGS = {
  'en-US': {
    // Report Structure & Titles
    reportTitle: 'Daily Insights', // Used if CONFIG.REPORT_TITLE needs to be dynamic by language
    executiveSummaryTitle: '🎯 Executive Summary',
    gmailSectionTitle: '📧 Gmail Insights',
    urgentEmailsSubtitle: '🚨 Urgent Emails to Address',
    activeContactsSubtitle: '📊 Active Contacts',
    calendarSectionTitle: '📅 Calendar & Schedule',
    todayEventsSubtitle: '⏰ Today\'s Schedule',
    meetingAnalysisSubtitle: '📊 Meeting Type Analysis',
    externalInfoSectionTitle: '🌍 External Information',
    financeNewsSubtitle: '💰 Finance News',
    weatherInfoSubtitle: '🌤️ Weather Update',
    localNewsSubtitle: '📰 Local News',
    bookmarksSectionTitle: '🔖 Bookmarks Digest',
    feedlySectionTitle: '📰 Feedly Digest',
    youtubeSectionTitle: '📺 YouTube Digest',
    recommendationsSectionTitle: '💡 Smart Suggestions',
    errorSectionTitle: '⚙️ Execution Notes & Suggestions',
    recordedIssuesSubtitle: '⚠️ Recorded Issues Summary:',
    suggestionsSubtitle: '💡 General Suggestions:',

    // Labels & Recurring Phrases
    emailsLabel: 'Emails',
    unreadLabel: 'unread',
    importantLabel: 'important',
    eventsLabel: 'events',
    busyHoursLabel: 'estimated busy hours',
    nextEventLabel: 'Next event',
    emailItemsLabel: 'emails', // e.g., 5 emails
    eventItemsLabel: 'items', // e.g., 3 items (for meeting types)
    sp500Label: 'S&P 500:',
    watchedAtLabel: 'Watched:',

    // Messages & Notifications
    locationDetectedMsg: '*Location for news/weather auto-detected as: **{location}**. For more precise local information, please set `LOCATION` in the script\'s `CONFIG`.*',
    errorLimitMsg: 'Further errors occurred but are not listed in this summary (limit: {limit}). Check full logs.',

    // Gmail Specific
    emailStatusUnread: '**[UNREAD]**',

    // Calendar Specific
    eventImportantMarker: '🔥',
    eventLocationMarker: '📍',
    meetingTypeMeeting: 'Meeting',
    meetingTypeInterview: 'Interview',
    meetingTypeDining: 'Dining',
    meetingTypeCall: 'Call',
    meetingTypeTraining: 'Training',
    meetingTypePersonal: 'Personal',
    meetingTypeOther: 'Other',

    // Recommendation Snippets
    gmailUnreadRecommendation: '📧 **Email Management**: Many unread emails. Consider batch processing or setting up filters.',
    gmailUrgentRecommendation: '🚨 **Priority Action**: Urgent emails require immediate attention.',
    calendarBusyRecommendation: '⏰ **Time Management**: Today\'s schedule is quite full. Remember to reserve time for breaks.',
    calendarNextEventSoonRecommendation: '🏃 **Upcoming**: Your next event is starting soon. Please prepare.',
    greetingGoodMorning: '🌅 **Good Morning**: A new day has begun! Review important emails and today\'s schedule.',
    greetingGoodEvening: '🌆 **Good Evening**: The day is winding down. Consider planning your tasks for tomorrow.',

    // Error Summary Suggestions
    suggestionFileErrors: '- If you see "File not found" or "Folder part not found" errors related to User Imports, please verify the folder structure and filenames in your Google Drive against `CONFIG.USER_IMPORTS_DRIVE_BASE_PATH` (`{basePath}`) and related file name settings in the script\'s `CONFIG`.',
    suggestionApiQuotaErrors: '- For "API", "quota", "limit", or "service invoked too many times" errors, the script may have exceeded Google\'s service limits. Try running it less frequently, reduce data processing limits in `CONFIG` (e.g., `IMPORT_FEEDLY_MAX_FEEDS`), or check Google Cloud Platform quotas for associated services if applicable.',
    suggestionPermissionErrors: '- For "permission" or "access denied" errors, ensure the script has the necessary authorizations. You might need to re-authorize it: open the script in the Apps Script editor, go to "Execute" > "All functions" > select and run `initializeGDI` (or any other function like `main` or `testRun`). This should re-trigger the authorization flow if needed.',
    suggestionCheckLogs: '- Check the full execution logs in Google Apps Script (from the editor: View > Executions) and the error details sheet named \'{errorSheetName}\' in your Google Sheets for more comprehensive information.'
  },
  'zh-TW': {
    // Report Structure & Titles
    reportTitle: '每日洞察報告',
    executiveSummaryTitle: '🎯 今日概覽',
    gmailSectionTitle: '📧 Gmail 洞察',
    urgentEmailsSubtitle: '🚨 需要關注的郵件',
    activeContactsSubtitle: '📊 活躍聯絡人',
    calendarSectionTitle: '📅 行程安排',
    todayEventsSubtitle: '⏰ 今日行程',
    meetingAnalysisSubtitle: '📊 會議類型分析',
    externalInfoSectionTitle: '🌍 外部資訊',
    financeNewsSubtitle: '💰 財經快訊',
    weatherInfoSubtitle: '🌤️ 天氣資訊',
    localNewsSubtitle: '📰 本地新聞',
    bookmarksSectionTitle: '🔖 書籤摘要',
    feedlySectionTitle: '📰 Feedly 摘要',
    youtubeSectionTitle: '📺 YouTube 摘要',
    recommendationsSectionTitle: '💡 智能建議',
    errorSectionTitle: '⚙️ 執行註記與建議',
    recordedIssuesSubtitle: '⚠️ 已記錄問題摘要:',
    suggestionsSubtitle: '💡 通用建議:',

    // Labels & Recurring Phrases
    emailsLabel: '封郵件', // e.g., 5 封郵件
    unreadLabel: '未讀',
    importantLabel: '重要',
    eventsLabel: '個事件',
    busyHoursLabel: '預計忙碌',
    nextEventLabel: '下一個事件',
    emailItemsLabel: '封郵件',
    eventItemsLabel: '個', // e.g., 3 個 (會議類型)
    sp500Label: '標普500指數:',
    watchedAtLabel: '觀看於:',

    // Messages & Notifications
    locationDetectedMsg: '*新聞和天氣的地理位置已自動偵測為：**{location}**。要獲取更精確的本地資訊，請在腳本 `CONFIG` 中設定 `LOCATION`。*',
    errorLimitMsg: '發生更多錯誤，但未在此摘要中列出 (上限: {limit})。請檢查完整日誌。',

    // Gmail Specific
    emailStatusUnread: '**[未讀]**',

    // Calendar Specific
    eventImportantMarker: '🔥',
    eventLocationMarker: '📍',
    meetingTypeMeeting: '會議',
    meetingTypeInterview: '面試',
    meetingTypeDining: '用餐',
    meetingTypeCall: '通話',
    meetingTypeTraining: '培訓',
    meetingTypePersonal: '私人',
    meetingTypeOther: '其他',

    // Recommendation Snippets
    gmailUnreadRecommendation: '📧 **郵件管理**: 未讀郵件較多，建議批量處理或設定過濾規則。',
    gmailUrgentRecommendation: '🚨 **優先處理**: 有緊急郵件需要立即關注。',
    calendarBusyRecommendation: '⏰ **時間管理**: 今日行程較滿，建議預留休息時間。',
    calendarNextEventSoonRecommendation: '🏃 **即將開始**: 下一個會議即將開始，請做好準備。',
    greetingGoodMorning: '🌅 **早安**: 新的一天開始，建議查看重要郵件和今日行程。',
    greetingGoodEvening: '🌆 **晚安**: 一天辛苦了，建議整理明日待辦事項。',

    // Error Summary Suggestions
    suggestionFileErrors: '- 若您看到與使用者匯入相關的「找不到檔案」或「找不到資料夾部分」等錯誤，請根據腳本 `CONFIG` 中的 `CONFIG.USER_IMPORTS_DRIVE_BASE_PATH` (`{basePath}`) 及相關檔案名稱設定，檢查您 Google Drive 中的資料夾結構和檔案名稱是否正確。',
    suggestionApiQuotaErrors: '- 若出現「API」、「配額」、「限制」或「服務調用次數過多」等錯誤，可能是腳本超出了 Google 的服務限制。請嘗試降低執行頻率，減少 `CONFIG` 中的數據處理限制（例如 `IMPORT_FEEDLY_MAX_FEEDS`），或檢查相關服務在 Google Cloud Platform 中的配額。',
    suggestionPermissionErrors: '- 若出現「權限」或「存取遭拒」等錯誤，請確保腳本擁有必要的授權。您可能需要重新授權：在 Apps Script 編輯器中開啟腳本，前往「執行」>「所有函數」> 選擇並執行 `initializeGDI`（或任何其他如 `main` 或 `testRun` 的函數）。這應能重新觸發授權流程。',
    suggestionCheckLogs: '- 請檢查 Google Apps Script 中的完整執行日誌（在編輯器中選擇「檢視」>「執行作業」）以及名為「{errorSheetName}」的 Google Sheets 試算表中的錯誤詳細資訊，以獲取更全面的資訊。'
  }
};

// ==================== 核心配置 ====================
const CONFIG = {
  // 使用者位置 - 唯一需要偵測的部分
  LANGUAGE: 'zh-TW',
  LOCATION: 'Taipei', // User's primary city/region for local news and weather.
                       // If empty or set to 'AUTO_DETECT' (case-insensitive), the script will attempt
                       // to derive a location from the script's timezone (e.g., "Taipei" from "Asia/Taipei").
                       // If auto-detection also fails, it defaults to a generic region (e.g., "Global").
                       // For best results, set this explicitly.
  TIMEZONE: 'Asia/Taipei',

  // 報告配置
  REPORT_TITLE: 'Daily Insights',
  DAILY_LIMIT: {
    EMAILS: 20,
    EVENTS: 10,
    NEWS: 5
  },

  // 系統配置
  ERROR_SHEET: 'GDI_Logs',
  CACHE_DURATION: 3600, // 1小時快取
  RETRY_COUNT: 3,

  // 使用者匯入檔案配置
  USER_IMPORTS_DRIVE_BASE_PATH: 'GDI_User_Data/', // Google Drive 中存放匯入檔案的基本路徑
  BOOKMARKS_FILE_NAME: 'bookmarks.html',
  FEEDLY_OPML_FILE_NAME: 'feedly.opml',
  YOUTUBE_JSON_HISTORY_FILE_NAME: 'watch-history.json',
  YOUTUBE_HTML_HISTORY_FILE_NAME: 'watch-history.html', // 若 JSON 找不到時的備援

  // 匯入資料處理上限
  IMPORT_BOOKMARKS_MAX_ITEMS: 15,
  IMPORT_FEEDLY_MAX_FEEDS: 3,
  IMPORT_FEEDLY_MAX_ITEMS_PER_FEED: 2,
  IMPORT_YOUTUBE_MAX_ITEMS: 15,

  // 錯誤報告配置
  MAX_ERRORS_IN_REPORT: 5
};

// ==================== 核心工具類 ====================
class CoreUtils {
  static getSession() {
    return Session.getActiveUser().getEmail();
  }

  static formatDate(dateParam = new Date()) { // Renamed param to avoid conflict
    let dateToFormat = dateParam;
    if (!(dateToFormat instanceof Date)) {
        // Attempt to convert if it's a string that might be a date
        const potentialDate = new Date(dateToFormat);
        if (!isNaN(potentialDate.getTime())) {
            dateToFormat = potentialDate;
        } else {
            // If conversion fails or it wasn't a string date, log error and use current date as fallback
            CoreUtils.logError('CoreUtils.formatDate', `Invalid date_to_format parameter type or value: ${String(dateParam)}. Using current date as fallback.`);
            dateToFormat = new Date();
        }
    } else if (isNaN(dateToFormat.getTime())) {
         CoreUtils.logError('CoreUtils.formatDate', `Received an Invalid Date object. Using current date as fallback.`);
         dateToFormat = new Date();
    }
    return Utilities.formatDate(dateToFormat, CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
  }

  static safeExecute(fn, context = 'Unknown') {
    try {
      return fn();
    } catch (error) {
      this.logError(context, error);
      return null;
    }
  }

  static logError(context, error) {
    console.error(`[${context}] ${error.message}`);

    try {
      const sheet = this.getLogSheet();
      sheet.appendRow([
        this.formatDate(),
        context,
        'ERROR',
        error.message || error.toString()
      ]);
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    // Populate global error summary for the report
    if (executionErrorSummary.length < CONFIG.MAX_ERRORS_IN_REPORT) {
        let briefMessage = (error && typeof error.message === 'string') ? error.message : String(error);
        // Check if error.stack is available and if the first line of stack is different from message
        if (error && typeof error.stack === 'string') {
            const firstStackLine = error.stack.split('\n')[0];
            if (firstStackLine && !briefMessage.includes(firstStackLine) && firstStackLine !== briefMessage) {
                 briefMessage += ` (${firstStackLine})`; // Append first line of stack if it's different and informative
            }
        }
        executionErrorSummary.push({
            context: context,
            message: briefMessage.substring(0, 200) // Truncate combined message
        });
    } else if (executionErrorSummary.length === CONFIG.MAX_ERRORS_IN_REPORT) {
        // Add a single message indicating further errors are omitted from summary
        executionErrorSummary.push({
            context: 'System',
            message: `Further errors occurred but are not listed in this summary (limit: ${CONFIG.MAX_ERRORS_IN_REPORT}). Check full logs.`
        });
        // Increment length to prevent this message from being added repeatedly
        executionErrorSummary.length++;
    }
  }

  static getLogSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet() ||
               SpreadsheetApp.create(CONFIG.ERROR_SHEET);

    let sheet = ss.getSheetByName(CONFIG.ERROR_SHEET);
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.ERROR_SHEET);
      sheet.getRange(1, 1, 1, 4).setValues([
        ['Timestamp', 'Module', 'Level', 'Message']
      ]);
    }
    return sheet;
  }

  static getCachedData(key) {
    const cache = CacheService.getUserCache();
    const cached = cache.get(key);
    return cached ? JSON.parse(cached) : null;
  }

  static setCachedData(key, data) {
    const cache = CacheService.getUserCache();
    cache.put(key, JSON.stringify(data), CONFIG.CACHE_DURATION);
  }

  static sanitizeString(str) {
    if (typeof str !== 'string') {
      return String(str || '');
    }
    // Keeps printable ASCII (U+0020 to U+007E), non-breaking space (U+00A0), and Latin-1 Supplement (U+00A0 to U+00FF).
    // Replaces others with '?'.
    // return str.replace(/[^\u0020-\u007E\u00A0-\u00FF]/g, '?'); // Old method

      // New method: Remove emojis and problematic characters, keep most language characters.
      // The 'u' flag is essential for this regex to work correctly with Unicode escapes like \u{...}.
      const emojiAndProblematicCharsRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F1E6}-\u{1F1FF}\uFFFD]/gu;

      let cleanedStr = str.replace(emojiAndProblematicCharsRegex, '');

      // Filter out most control characters (U+0000-U+001F, U+007F-U+009F)
      // but keep common whitespace like tab (U+0009), LF (U+000A), CR (U+000D).
      const controlCharsRegex = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;
      cleanedStr = cleanedStr.replace(controlCharsRegex, '');

      return cleanedStr;
  }

  static fetchWithRetries(url, params = {}, retries = CONFIG.RETRY_COUNT, context = 'UrlFetch') {
    let lastError = null;
    for (let i = 0; i <= retries; i++) {
        try {
            // Using console.log for attempt logging to avoid recursive CoreUtils.logError if sheet logging fails
            console.log(`[${context}] Attempt ${i + 1}/${retries + 1} to fetch ${url}`);
            const response = UrlFetchApp.fetch(url, params);

            // If muteHttpExceptions is true, UrlFetchApp doesn't throw for HTTP errors, so we check response code.
            if (params.muteHttpExceptions && response.getResponseCode() >= 400) {
                 // Consider retrying only on 5xx or specific 4xx (e.g., 429 Too Many Requests).
                 // For this implementation, we'll throw to trigger retry for any >= 400 when muteHttpExceptions is true.
                 const errorMsg = `Fetch failed with status ${response.getResponseCode()} for URL: ${url}`;
                 console.warn(`[${context}] Attempt ${i + 1} failed: ${errorMsg}`);
                 lastError = new Error(errorMsg); // Store this specific error
                 if (i < retries) {
                     Utilities.sleep((i + 1) * 1000); // Wait 1s, 2s, 3s...
                 }
                 continue; // Go to next retry iteration
            }
            return response; // Success (either 2xx/3xx, or non-erroring response if muteHttpExceptions is false)
        } catch (e) {
            lastError = e; // Store the caught error
            console.warn(`[${context}] Fetch attempt ${i + 1} failed for ${url}: ${e.message}`);
            if (i < retries) {
                Utilities.sleep((i + 1) * 1000); // Wait 1s, 2s, 3s...
            }
        }
    }
    // All retries failed
    const finalErrorMsg = `Failed to fetch ${url} after ${retries + 1} attempts. Last error: ${lastError ? lastError.message : 'Unknown'}`;
    CoreUtils.logError(context, new Error(finalErrorMsg)); // Log the final failure
    return null; // Indicate failure
  }
}

// ==================== 高價值數據收集器 ====================
class PrimaryDataCollector {

  // Gmail 洞察 - 核心價值模組
  static collectGmailInsights() {
    return CoreUtils.safeExecute(() => {
      const cacheKey = 'gmail_insights';
      const cached = CoreUtils.getCachedData(cacheKey);
      if (cached) return cached;

      // 收集最近24小時的重要郵件
      const query = 'newer_than:1d (is:important OR is:unread OR from:me)';
      const threads = GmailApp.search(query, 0, CONFIG.DAILY_LIMIT.EMAILS);

      const insights = {
        totalThreads: threads.length,
        unreadCount: 0,
        importantCount: 0,
        fromMeCount: 0,
        topSenders: {},
        urgentEmails: [],
        summary: []
      };

      threads.forEach(thread => {
        const messages = thread.getMessages();
        const lastMessage = messages[messages.length - 1];
        const rawSender = lastMessage.getFrom().replace(/<.*>/, '').trim();
        const sender = CoreUtils.sanitizeString(rawSender);

        // 統計數據
        if (thread.isUnread()) insights.unreadCount++;
        if (thread.isImportant()) insights.importantCount++;
        if (sender.includes(CoreUtils.getSession())) insights.fromMeCount++;

        // 發件人統計
        insights.topSenders[sender] = (insights.topSenders[sender] || 0) + 1;

        // 緊急郵件檢測
        const rawSubject = thread.getFirstMessageSubject();
        const subject = CoreUtils.sanitizeString(rawSubject);
        const isUrgent = /urgent|asap|緊急|急件/i.test(subject); // Test sanitized subject

        if (isUrgent || thread.isImportant()) {
          insights.urgentEmails.push({
            subject: subject, // Sanitized
            from: sender,     // Sanitized
            time: lastMessage.getDate(),
            isUnread: thread.isUnread()
          });
        }

        // 生成摘要
        insights.summary.push({
          subject: subject, // Sanitized
          from: sender,     // Sanitized
          snippet: CoreUtils.sanitizeString(lastMessage.getPlainBody().substring(0, 100)),
          time: lastMessage.getDate(),
          isUnread: thread.isUnread(),
          isImportant: thread.isImportant()
        });
      });

      // 排序熱門發件人
      insights.topSenders = Object.entries(insights.topSenders)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {});

      CoreUtils.setCachedData(cacheKey, insights);
      return insights;

    }, 'Gmail Collection');
  }

  // 日曆洞察 - 核心價值模組
  static collectCalendarInsights() {
    return CoreUtils.safeExecute(() => {
      const cacheKey = 'calendar_insights';
      const cached = CoreUtils.getCachedData(cacheKey);
      if (cached) return cached;

      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const events = CalendarApp.getDefaultCalendar()
        .getEvents(now, endOfDay)
        .slice(0, CONFIG.DAILY_LIMIT.EVENTS);

      const insights = {
        totalEvents: events.length,
        nextEvent: null,
        busyHours: 0,
        meetingTypes: {},
        upcoming: []
      };

      events.forEach(event => {
        const duration = (event.getEndTime() - event.getStartTime()) / 1000 / 60; // 分鐘
        insights.busyHours += duration;

        // 會議類型分析
        const title = event.getTitle();
        const type = this.categorizeEvent(title);
        insights.meetingTypes[type] = (insights.meetingTypes[type] || 0) + 1;

        // 即將到來的事件
        if (event.getStartTime() > now) {
          const eventData = {
            title: title,
            start: event.getStartTime(),
            end: event.getEndTime(),
            location: event.getLocation(),
            attendees: event.getGuestList().length,
            isImportant: /重要|important|urgent/i.test(title)
          };

          insights.upcoming.push(eventData);

          // 設定下一個事件
          if (!insights.nextEvent || event.getStartTime() < insights.nextEvent.start) {
            insights.nextEvent = eventData;
          }
        }
      });

      insights.busyHours = Math.round(insights.busyHours / 60 * 10) / 10; // 轉換為小時，保留1位小數

      CoreUtils.setCachedData(cacheKey, insights);
      return insights;

    }, 'Calendar Collection');
  }

  // 事件分類邏輯
  static categorizeEvent(title) {
    const lower = title.toLowerCase();

    if (/meeting|會議|討論/i.test(lower)) return '會議';
    if (/interview|面試/i.test(lower)) return '面試';
    if (/lunch|dinner|餐|吃/i.test(lower)) return '用餐';
    if (/call|電話/i.test(lower)) return '通話';
    if (/training|training|教育|學習/i.test(lower)) return '培訓';
    if (/personal|私人/i.test(lower)) return '私人';

    return '其他';
  }
}

// ==================== 外部資訊收集器 ====================
class ExternalDataCollector {

  // 新聞收集 - 簡化但有價值
  static collectNews() {
    return CoreUtils.safeExecute(() => {
      const cacheKey = 'news_data_v2'; // Changed cache key due to new return structure
      const cached = CoreUtils.getCachedData(cacheKey);
      if (cached) return cached;

      let effectiveLocation = CONFIG.LOCATION;
      let wasLocationAutoDetected = false;

      if (!CONFIG.LOCATION || CONFIG.LOCATION.toUpperCase() === 'AUTO_DETECT' || CONFIG.LOCATION.trim() === '') {
        wasLocationAutoDetected = true;
        const timezone = CoreUtils.safeExecute(() => Session.getScriptTimeZone(), 'GetTimezoneForLocation');
        if (timezone && timezone.includes('/')) { // Basic validation for timezone format
          effectiveLocation = timezone.split('/').pop().replace(/_/g, ' ');
          CoreUtils.logError('Location Detection', `Location auto-detected as: ${effectiveLocation} (from timezone: ${timezone})`);
        } else {
          effectiveLocation = 'Global'; // Generic placeholder
          CoreUtils.logError('Location Detection', `Failed to auto-detect location from timezone ('${timezone}'). Using default: '${effectiveLocation}'.`);
        }
      }

      // Ensure effectiveLocation is a non-empty string for URL construction
      if (!effectiveLocation || typeof effectiveLocation !== 'string' || effectiveLocation.trim() === '') {
          CoreUtils.logError('Location Detection', `Effective location is invalid ('${effectiveLocation}'). Falling back to 'Global'.`);
          effectiveLocation = 'Global';
      }


      const newsData = {
        finance: this.getFinanceNews(), // Finance news is not location-specific in current impl.
        weather: this.getWeatherInfo(effectiveLocation),
        local: this.getLocalNews(effectiveLocation)
      };

      const result = { newsData: newsData, effectiveLocation: effectiveLocation, wasLocationAutoDetected: wasLocationAutoDetected };
      CoreUtils.setCachedData(cacheKey, result);
      return result;

    }, 'News Collection');
  }

  static getFinanceNews() {
    try {
      const url = `https://news.google.com/rss?q=S%26P+500&hl=${CONFIG.LANGUAGE}`; // Not using effectiveLocation for S&P 500
      const response = UrlFetchApp.fetch(url);
      const xml = XmlService.parse(response.getContentText());
      const items = xml.getRootElement().getChild('channel').getChildren('item');

      if (items.length > 0) {
        const item = items[0];
        const title = CoreUtils.sanitizeString(item.getChild('title').getText());
        // Attempt to get description; some feeds might use 'content:encoded' or other tags.
        // For simplicity, we'll try 'description' first.
        const descriptionNode = item.getChild('description');
        const description = descriptionNode ? CoreUtils.sanitizeString(descriptionNode.getText()) : '';

        let sp500data = null;

        // Regex to capture S&P 500 value, change, and percentage change.
        // It looks for "S&P 500", then a value (e.g., 4,500.32),
        // then a change (e.g., +25.10 or -10.50 or –10.50),
        // and then a percentage change (e.g., +0.56% or -1.23% or –1.23%).
        const spRegex = /S&P\s*500.*?([\d,]+\.\d{2}).*?([\+\-\–]\s*[\d\.]+)\s*\(?([\+\-\–]\s*[\d\.]+%)\)?/i;

        let match = spRegex.exec(title);
        if (!match) {
          match = spRegex.exec(description);
        }

        if (match && match.length === 4) {
          sp500data = {
            value: match[1].replace(/,/g, ''), // Remove commas from value
            change: match[2].replace(/\s/g, ''), // Remove spaces
            percentChange: match[3].replace(/\s/g, '') // Remove spaces
          };
          CoreUtils.logError('Finance News', `S&P 500 data extracted: ${JSON.stringify(sp500data)}`); // Using logError for visibility, can be info
        } else {
          CoreUtils.logError('Finance News', 'S&P 500 data not found in RSS item title or description.');
        }

        return {
          title: title,
          link: item.getChild('link').getText(), // Links are generally not sanitized
          pubDate: item.getChild('pubDate').getText(),
          sp500: sp500data // This will be null if not found
        };
      }
      // If items.length is 0 or some other issue before the main try block's end
      return { title: 'No finance news found', link: '', pubDate: '', sp500: null }; // Ensure a consistent object structure
    } catch (e) {
      let errorToLog = e;
      if (!(e instanceof Error)) {
        errorToLog = new Error(`Error in Finance News collection: ${String(e)}`);
      } else if (!e.message) {
        errorToLog = new Error(`Error in Finance News collection (no specific message): ${String(e)}`);
      }
      CoreUtils.logError('Finance News', errorToLog);
    }
    return null; // Or return the same structure: { title: 'Error fetching news', link: '', pubDate: '', sp500: null }
  }

  static getWeatherInfo() {
    try {
      const url = `https://news.google.com/rss?q=${CONFIG.LOCATION}+weather&hl=${CONFIG.LANGUAGE}`;
      const response = UrlFetchApp.fetch(url);
      const xml = XmlService.parse(response.getContentText());
      const items = xml.getRootElement().getChild('channel').getChildren('item');

      if (items.length > 0) {
        const item = items[0];
        return {
          title: CoreUtils.sanitizeString(item.getChild('title').getText()),
          link: item.getChild('link').getText() // Links are generally not sanitized
        };
      }
    } catch (error) {
      CoreUtils.logError('Weather Info', error);
    }
    return null;
  }

  static getWeatherInfo(locationString) {
    if (!locationString || typeof locationString !== 'string' || locationString.trim() === '') {
        CoreUtils.logError('Weather Info', 'Invalid or empty location string provided for weather. Skipping fetch.');
        return null;
    }
    try {
      const url = `https://news.google.com/rss?q=${encodeURIComponent(locationString)}+weather&hl=${CONFIG.LANGUAGE}`;
      const response = UrlFetchApp.fetch(url);
      const xml = XmlService.parse(response.getContentText());
      const items = xml.getRootElement().getChild('channel').getChildren('item');

      return items.slice(0, CONFIG.DAILY_LIMIT.NEWS).map(item => ({
        title: CoreUtils.sanitizeString(item.getChild('title').getText()),
        link: item.getChild('link').getText(), // Links are generally not sanitized
        pubDate: item.getChild('pubDate').getText()
      }));
    } catch (error) {
      CoreUtils.logError('Local News', error);
    }
    return [];
  }
}

// ==================== USER IMPORTED DATA COLLECTOR ====================
class UserImportedDataCollector {

    /**
     * Finds a file in the user's Drive within a specific folder structure.
     * @param {string} relativeFolderPath The path relative to USER_IMPORTS_DRIVE_BASE_PATH.
     * @param {string} fileName The name of the file to find.
     * @returns {GoogleAppsScript.Drive.File|null} The file object or null if not found.
     * @private
     */
    static _findFileInDrive(relativeFolderPath, fileName) {
        return CoreUtils.safeExecute(() => {
            const basePath = CONFIG.USER_IMPORTS_DRIVE_BASE_PATH; // e.g., "GDI_User_Data/" or "My GDI Files/Imports/"
            const cleanRelativePath = relativeFolderPath.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes

            let pathSegments = [];
            if (basePath) {
                // Remove leading/trailing slashes from basePath and split
                pathSegments = pathSegments.concat(basePath.replace(/^\/+|\/+$/g, '').split('/'));
            }
            if (cleanRelativePath) {
                pathSegments = pathSegments.concat(cleanRelativePath.split('/'));
            }
            // Filter out any empty parts that might result from "//" or if a path string was empty
            pathSegments = pathSegments.filter(p => p && p.length > 0);

            if (pathSegments.length === 0) {
                console.warn("[UserImportedDataCollector._findFileInDrive] No valid path segments derived. BasePath: '" + basePath + "', RelativePath: '" + relativeFolderPath + "'. Cannot search for file.");
                return null;
            }

            let currentFolder = DriveApp.getRootFolder();
            let constructedPathForLog = ""; // For logging the path being traversed

            for (let i = 0; i < pathSegments.length; i++) {
                const part = pathSegments[i];
                constructedPathForLog += (constructedPathForLog ? "/" : "") + part; // Build path for logging

                const folders = currentFolder.getFoldersByName(part);
                if (!folders.hasNext()) {
                    let logMessage = `[UserImportedDataCollector._findFileInDrive] Folder part not found: '${part}' while trying to construct path '${constructedPathForLog}'.`;
                    logMessage += ` Expected full path from root: '${pathSegments.join('/')}'.`;
                    if (i === 0) {
                        logMessage += ` This suggests the base folder component '${part}' (from CONFIG.USER_IMPORTS_DRIVE_BASE_PATH) was not found directly under 'My Drive'. Please ensure this base path is correct and the folder exists at the root.`;
                    } else {
                        logMessage += ` Navigation failed at segment '${part}' relative to parent folder '${currentFolder.getName()}'.`;
                    }
                    console.warn(logMessage);
                    return null;
                }
                currentFolder = folders.next();
                if (folders.hasNext()) { // Log if multiple folders with same name found in this segment, use first
                    console.warn(`[UserImportedDataCollector._findFileInDrive] Multiple folders named '${part}' found in parent folder '${(i > 0 ? pathSegments[i-1] : 'My Drive')}'. Using the first one found to continue path '${constructedPathForLog}'.`);
                }
            }

            // Now currentFolder should be the target directory
            const files = currentFolder.getFilesByName(fileName);
            if (files.hasNext()) {
                const file = files.next();
                if (files.hasNext()) { // Log if multiple files with same name found in target folder, use first
                    console.warn(`[UserImportedDataCollector._findFileInDrive] Multiple files named '${fileName}' found in target folder '${currentFolder.getName()}'. Using the first one found.`);
                }
                console.log(`[UserImportedDataCollector._findFileInDrive] File found: ${fileName} in path ${pathSegments.join('/')}`);
                return file;
            }

            console.log(`[UserImportedDataCollector._findFileInDrive] File not found: ${fileName} in final path ${pathSegments.join('/')}. Looked in folder '${currentFolder.getName()}'.`);
            return null;
        }, `Finding file: ${fileName} in relative path: ${relativeFolderPath} (configured base path: ${CONFIG.USER_IMPORTS_DRIVE_BASE_PATH})`);
    }

    static collectBookmarkInsights() {
        return CoreUtils.safeExecute(() => {
            const fileName = CONFIG.BOOKMARKS_FILE_NAME;
            // The relativeFolderPath 'Bookmarks' assumes USER_IMPORTS_DRIVE_BASE_PATH is like 'GDI_User_Data/'
            // and the actual file is at 'GDI_User_Data/Bookmarks/bookmarks.html'.
            const file = this._findFileInDrive('Bookmarks', fileName);

            if (!file) {
                // Use console.info for less alarming logs for non-critical "file not found"
                console.info(`[UserImportedDataCollector.collectBookmarkInsights] File not found: ${CONFIG.USER_IMPORTS_DRIVE_BASE_PATH}Bookmarks/${fileName}`);
                return { status: 'not_found', items: [], fileName: fileName };
            }

            console.log(`[UserImportedDataCollector.collectBookmarkInsights] Processing file: ${fileName}`);
            const fileContent = file.getBlob().getDataAsString();
            const extractedBookmarks = [];
            // Regex to find <a> tags and extract href and text.
            const regex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi;
            let match;
            let count = 0;

            while ((match = regex.exec(fileContent)) !== null && count < CONFIG.IMPORT_BOOKMARKS_MAX_ITEMS) {
                const link = match[1];
                let titleText = match[2].replace(/<[^>]+>/g, '').trim(); // Strip inner HTML tags and trim

                if (!titleText && link) { // If title is empty but link exists, try to derive from link
                    try {
                        const url = new URL(link); // Use URL constructor for robust parsing
                        titleText = url.pathname.substring(url.pathname.lastIndexOf('/') + 1) || url.hostname.replace(/^www\./, '');
                        if (!titleText) titleText = "Untitled Bookmark"; // Fallback if path/hostname is empty

                        // Basic cleanup for derived title
                        if (titleText.includes('.')) titleText = titleText.substring(0, titleText.lastIndexOf('.'));
                        titleText = titleText.replace(/[_-]/g, ' ');
                        titleText = titleText.split(' ')
                                         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                         .join(' ');
                    } catch (e) { // URL constructor might fail for invalid URLs
                        titleText = "Untitled Bookmark (from invalid URL)";
                    }
                } else if (!titleText && !link) { // Both empty, skip or use placeholder
                    titleText = "Invalid Bookmark Entry";
                }


                // Sanitize and truncate the final title
                const finalTitle = CoreUtils.sanitizeString(titleText.substring(0, 150));

                extractedBookmarks.push({
                    title: finalTitle,
                    link: link || '#' // Ensure link is not null, use '#' as placeholder if truly missing
                });
                count++;
            }

            console.log(`[UserImportedDataCollector.collectBookmarkInsights] Extracted ${count} bookmarks from ${fileName}.`);
            return { status: 'processed', items: extractedBookmarks, count: count, fileName: fileName };
        }, 'Bookmark Insights Collection');
    }

    static collectFeedlyInsights() {
        return CoreUtils.safeExecute(() => {
            const fileName = CONFIG.FEEDLY_OPML_FILE_NAME;
            const file = this._findFileInDrive('Feedly', fileName); // Assumes path GDI_User_Data/Feedly/feedly.opml

            if (!file) {
                console.info(`[UserImportedDataCollector.collectFeedlyInsights] File not found: ${CONFIG.USER_IMPORTS_DRIVE_BASE_PATH}Feedly/${fileName}`);
                return { status: 'not_found', items: [], fileName: fileName };
            }

            console.log(`[UserImportedDataCollector.collectFeedlyInsights] Processing file: ${fileName}`);
            const fileContent = file.getBlob().getDataAsString();
            const xml = XmlService.parse(fileContent);
            const root = xml.getRootElement();
            const body = root.getChild('body');

            if (!body) {
                console.warn(`[UserImportedDataCollector.collectFeedlyInsights] No <body> element found in OPML: ${fileName}`);
                return { status: 'opml_parse_error_no_body', items: [], fileName: fileName };
            }

            const outlines = body.getChildren('outline');
            const collectedFeedlyItems = [];
            let feedsProcessed = 0;
            let totalItemsFetched = 0;

            for (const outline of outlines) {
                if (feedsProcessed >= CONFIG.IMPORT_FEEDLY_MAX_FEEDS) {
                    break;
                }
                // OPML outlines can be nested. This example primarily processes top-level feeds.
                // A more robust version might recursively parse nested outlines.
                if (outline.getAttribute('type')?.getValue() !== 'rss' && !outline.getAttribute('xmlUrl')) {
                    // Could be a folder/category, skip if not a feed itself
                    // Or, one could recursively process children outlines here.
                    continue;
                }

                const feedUrl = outline.getAttribute('xmlUrl')?.getValue();
                const feedTitleAttr = outline.getAttribute('title')?.getValue() ||
                                      outline.getAttribute('text')?.getValue() || // Common alternative for title
                                      'Untitled Feed';
                const feedTitle = CoreUtils.sanitizeString(feedTitleAttr);

                if (feedUrl) {
                    console.log(`[UserImportedDataCollector.collectFeedlyInsights] Fetching feed: ${feedTitle} (${feedUrl})`);
                    try {
                        const feedResponse = UrlFetchApp.fetch(feedUrl, { 'muteHttpExceptions': true, 'validateHttpsCertificates': false });
                        const feedStatusCode = feedResponse.getResponseCode();

                        if (feedStatusCode !== 200) {
                            CoreUtils.logError('Feedly Feed Fetch', `Failed to fetch feed ${feedUrl}. Status: ${feedStatusCode}`);
                            continue; // Skip this feed
                        }

                        const feedXmlContent = feedResponse.getContentText();
                        const feedXml = XmlService.parse(feedXmlContent);
                        const feedRoot = feedXml.getRootElement();

                        let items = [];
                        const feedType = feedRoot.getName().toLowerCase();

                        if (feedType === 'rss') {
                            const channel = feedRoot.getChild('channel');
                            if (channel) items = channel.getChildren('item');
                        } else if (feedType === 'feed') { // Atom
                            items = feedRoot.getChildren('entry');
                        } else {
                            console.warn(`[UserImportedDataCollector.collectFeedlyInsights] Unknown feed type for ${feedUrl}: Root element is <${feedType}>`);
                            continue;
                        }

                        let itemsFromThisFeed = 0;
                        for (const item of items) {
                            if (itemsFromThisFeed >= CONFIG.IMPORT_FEEDLY_MAX_ITEMS_PER_FEED) break;

                            let itemTitle = '';
                            let itemLink = '';
                            let itemDescription = '';

                            if (feedType === 'rss') {
                                itemTitle = item.getChild('title')?.getText();
                                itemLink = item.getChild('link')?.getText(); // RSS usually has link text directly
                                itemDescription = item.getChild('description')?.getText() || '';
                            } else { // Atom
                                itemTitle = item.getChild('title')?.getText(); // Atom title is usually direct text
                                const linkElements = item.getChildren('link');
                                for(const linkElement of linkElements){
                                    if(linkElement.getAttribute('rel')?.getValue() === 'alternate' || !linkElement.getAttribute('rel')){
                                        itemLink = linkElement.getAttribute('href')?.getValue();
                                        break;
                                    }
                                }
                                if (!itemLink && linkElements.length > 0) itemLink = linkElements[0].getAttribute('href')?.getValue(); // Fallback to first link

                                itemDescription = item.getChild('summary')?.getText() || item.getChild('content')?.getText() || '';
                            }

                            itemTitle = CoreUtils.sanitizeString(itemTitle || 'No Title');
                            itemDescription = CoreUtils.sanitizeString(itemDescription.replace(/<[^>]+>/g, '').substring(0, 250) + (itemDescription.length > 250 ? '...' : ''));


                            collectedFeedlyItems.push({
                                feedTitle: feedTitle, // Already sanitized
                                title: itemTitle,
                                link: itemLink || '#', // Ensure link is not null
                                description: itemDescription
                            });
                            itemsFromThisFeed++;
                            totalItemsFetched++;
                        }
                        feedsProcessed++;
                    } catch (e) {
                        CoreUtils.logError(`Feedly Feed Processing (${feedTitle})`, e);
                    }
                }
            }
            console.log(`[UserImportedDataCollector.collectFeedlyInsights] Feedly OPML processed. Feeds attempted: ${feedsProcessed}, Total items fetched: ${totalItemsFetched}`);
            return { status: 'processed', items: collectedFeedlyItems, feedsProcessed: feedsProcessed, itemsFetched: totalItemsFetched, fileName: fileName };
        }, 'Feedly Insights Collection');
    }

    static collectYouTubeInsights() {
        return CoreUtils.safeExecute(() => {
            const jsonFileName = CONFIG.YOUTUBE_JSON_HISTORY_FILE_NAME;
            const htmlFileName = CONFIG.YOUTUBE_HTML_HISTORY_FILE_NAME;
            const relativeFolderPath = 'YouTube'; // Assumes GDI_User_Data/YouTube/

            let items = [];
            let status = 'not_found_initial';
            let processedFileName = '';
            let itemCount = 0;
            let attemptedJson = false;
            let attemptedHtml = false;

            // 1. Try JSON first
            const jsonFile = this._findFileInDrive(relativeFolderPath, jsonFileName);
            if (jsonFile) {
                attemptedJson = true;
                processedFileName = jsonFileName;
                console.log(`[UserImportedDataCollector.collectYouTubeInsights] Found ${jsonFileName}. Attempting JSON processing.`);
                try {
                    const content = jsonFile.getBlob().getDataAsString();
                    const historyData = JSON.parse(content);

                    if (Array.isArray(historyData)) {
                        for (const entry of historyData) {
                            if (itemCount >= CONFIG.IMPORT_YOUTUBE_MAX_ITEMS) break;

                            let title = entry.title || '';
                            const url = entry.titleUrl || null;
                            const time = entry.time || null;

                            if (title.startsWith('Watched ')) {
                                title = title.substring(8); // Remove "Watched " prefix
                            }

                            if (title && url) {
                                items.push({
                                    title: CoreUtils.sanitizeString(title),
                                    link: url,
                                    watchedAt: time
                                });
                                itemCount++;
                            }
                        }
                        if (itemCount > 0) {
                           status = 'processed_json';
                           console.log(`[UserImportedDataCollector.collectYouTubeInsights] Successfully parsed ${jsonFileName}. Extracted ${itemCount} items.`);
                        } else {
                           status = 'processed_json_no_items';
                           console.warn(`[UserImportedDataCollector.collectYouTubeInsights] Parsed ${jsonFileName} but no valid items found or extracted.`);
                        }
                    } else {
                        status = 'json_parse_error_not_array';
                        console.warn(`[UserImportedDataCollector.collectYouTubeInsights] ${jsonFileName} content is not a JSON array.`);
                    }
                } catch (e) {
                    status = 'json_parse_error';
                    CoreUtils.logError(`YouTube JSON Processing (${jsonFileName})`, e);
                    console.warn(`[UserImportedDataCollector.collectYouTubeInsights] Error parsing ${jsonFileName}. Will attempt HTML fallback if available.`);
                }
            } else {
                 console.info(`[UserImportedDataCollector.collectYouTubeInsights] JSON history file not found: ${jsonFileName}`);
            }

            // 2. Fallback to HTML if JSON not found, or parsing failed, or no items extracted from JSON
            if (items.length === 0) {
                const htmlFile = this._findFileInDrive(relativeFolderPath, htmlFileName);
                if (htmlFile) {
                    attemptedHtml = true;
                    processedFileName = htmlFileName; // Update processed file name
                    status = 'processing_html'; // Tentative status
                    console.log(`[UserImportedDataCollector.collectYouTubeInsights] Found ${htmlFileName}. Attempting HTML processing.`);
                    try {
                        const content = htmlFile.getBlob().getDataAsString();
                        // Regex for YouTube links: <a ... href="<YOUTUBE_URL>">Link Text (Title)</a>
                        // This simplified regex focuses on the href and link text.
                        const regex = /<a[^>]*href=["'](https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[^"']+?)["'][^>]*>([^<]+?)<\/a>/gi;
                        let match;
                        itemCount = 0; // Reset for HTML items

                        while ((match = regex.exec(content)) !== null && itemCount < CONFIG.IMPORT_YOUTUBE_MAX_ITEMS) {
                            const link = match[1];
                            const title = match[2].trim();
                            if (title && link) {
                                items.push({
                                    title: CoreUtils.sanitizeString(title),
                                    link: link,
                                    watchedAt: null // Timestamps are generally not available/reliable in HTML
                                });
                                itemCount++;
                            }
                        }
                        if (itemCount > 0) {
                            status = 'processed_html';
                            console.log(`[UserImportedDataCollector.collectYouTubeInsights] Successfully parsed ${htmlFileName}. Extracted ${itemCount} items.`);
                        } else {
                            status = 'processed_html_no_items';
                             console.warn(`[UserImportedDataCollector.collectYouTubeInsights] Parsed ${htmlFileName} but no valid items found or extracted.`);
                        }
                    } catch (e) {
                        status = 'html_parse_error';
                        CoreUtils.logError(`YouTube HTML Processing (${htmlFileName})`, e);
                    }
                } else {
                    console.info(`[UserImportedDataCollector.collectYouTubeInsights] HTML history file not found: ${htmlFileName}`);
                }
            }

            // Final status determination
            if (items.length === 0) {
                if (attemptedJson && status.startsWith('json_parse_error')) {
                    // JSON was found and failed, HTML not found or also failed
                } else if (attemptedHtml && status.startsWith('html_parse_error')) {
                    // HTML was found and failed
                } else if (attemptedJson || attemptedHtml) {
                     // One or both files were attempted but yielded no items (e.g. processed_json_no_items)
                }
                 else {
                    status = 'not_found_both'; // Neither file was found
                    processedFileName = 'N/A';
                     console.log(`[UserImportedDataCollector.collectYouTubeInsights] Neither JSON nor HTML YouTube history file found.`);
                }
            }


            return {
                status: status,
                fileName: processedFileName,
                items: items,
                count: items.length
            };
        }, 'YouTube Insights Collection');
    }
}

// ==================== 智能報告生成器 ====================
class IntelligentReportGenerator {

  constructor(gmailData, calendarData, newsData, bookmarkData, feedlyData, youtubeData, reportLocation, locationAutoDetected) {
    this.gmail = gmailData;
    this.calendar = calendarData;
    this.news = newsData;
    this.bookmarks = bookmarkData;
    this.feedly = feedlyData;
    this.youtube = youtubeData;
    this.reportLocation = reportLocation;
    this.locationAutoDetected = locationAutoDetected;
    this.timestamp = new Date();
    // Initialize strings based on CONFIG.LANGUAGE, defaulting to 'en-US'
    this.strings = LOCALIZED_STRINGS[CONFIG.LANGUAGE] || LOCALIZED_STRINGS['en-US'];
    // If CONFIG.REPORT_TITLE itself needs to be localized, it's done here.
    // Otherwise, the global CONFIG.REPORT_TITLE will be used.
    this.reportTitle = this.strings.reportTitle || CONFIG.REPORT_TITLE;
  }

  generateReport() {
    const report = [];

    // 標題和時間
    report.push(this.generateHeader());

    // Location auto-detection notice
    if (this.locationAutoDetected) {
      report.push(this.strings.locationDetectedMsg.replace('{location}', this.reportLocation) + '\n---');
    }

    // 核心洞察摘要
    report.push(this.generateExecutiveSummary());

    // Gmail 洞察
    if (this.gmail) {
      report.push(this.generateGmailSection());
    }

    // 日曆洞察
    if (this.calendar) {
      report.push(this.generateCalendarSection());
    }

    // 外部資訊
    if (this.news) {
      report.push(this.generateNewsSection());
    }

    // User Imported Data Sections
    if (this.bookmarks && this.bookmarks.items && this.bookmarks.items.length > 0) {
        report.push(this.generateBookmarksSection());
    }
    if (this.feedly && this.feedly.items && this.feedly.items.length > 0) {
        report.push(this.generateFeedlySection());
    }
    if (this.youtube && this.youtube.items && this.youtube.items.length > 0) {
        report.push(this.generateYouTubeSection());
    }

    // 智能建議
    report.push(this.generateRecommendations());

    // Add Error Summary Section if errors were recorded
    const errorSection = this.generateErrorSummarySection();
    if (errorSection) {
        report.push(errorSection);
    }

    return report.join('\n\n');
  }

  generateHeader() {
    const dateStr = Utilities.formatDate(this.timestamp, CONFIG.TIMEZONE, 'yyyy年MM月dd日 HH:mm'); // Date format might also need localization string
    return `# 📊 ${this.reportTitle} - ${dateStr}\n---`;
  }

  generateExecutiveSummary() {
    const summary = [`## ${this.strings.executiveSummaryTitle}`];

    // Gmail 概覽
    if (this.gmail) {
      summary.push(`📧 **${this.strings.emailsLabel}**: ${this.gmail.totalThreads} (${this.gmail.unreadCount} ${this.strings.unreadLabel}, ${this.gmail.importantCount} ${this.strings.importantLabel})`);
    }

    // 日曆概覽
    if (this.calendar) {
      summary.push(`📅 **${this.strings.eventsLabel}**: ${this.calendar.totalEvents} (${this.strings.busyHoursLabel} ${this.calendar.busyHours} 小時)`); // '小時' might need localization

      if (this.calendar.nextEvent) {
        const timeStr = Utilities.formatDate(this.calendar.nextEvent.start, CONFIG.TIMEZONE, 'HH:mm');
        summary.push(`⏰ **${this.strings.nextEventLabel}**: ${timeStr} - ${this.calendar.nextEvent.title}`);
      }
    }

    return summary.join('\n');
  }

  generateGmailSection() {
    const section = [`## ${this.strings.gmailSectionTitle}`];

    // 緊急郵件
    if (this.gmail.urgentEmails.length > 0) {
      section.push(`### ${this.strings.urgentEmailsSubtitle}`);
      this.gmail.urgentEmails.forEach(email => {
        const timeStr = Utilities.formatDate(email.time, CONFIG.TIMEZONE, 'HH:mm');
        const status = email.isUnread ? this.strings.emailStatusUnread : '';
        section.push(`- ${status} **${email.subject}** (${email.from}) - ${timeStr}`);
      });
    }

    // 熱門發件人
    if (Object.keys(this.gmail.topSenders).length > 0) {
      section.push(`### ${this.strings.activeContactsSubtitle}`);
      Object.entries(this.gmail.topSenders).forEach(([sender, count]) => {
        section.push(`- **${sender}**: ${count} ${this.strings.emailItemsLabel}`);
      });
    }

    return section.join('\n');
  }

  generateCalendarSection() {
    const section = [`## ${this.strings.calendarSectionTitle}`];

    // 即將到來的事件
    if (this.calendar.upcoming.length > 0) {
      section.push(`### ${this.strings.todayEventsSubtitle}`);
      this.calendar.upcoming.forEach(event => {
        const startStr = Utilities.formatDate(event.start, CONFIG.TIMEZONE, 'HH:mm');
        const endStr = Utilities.formatDate(event.end, CONFIG.TIMEZONE, 'HH:mm');
        const important = event.isImportant ? `${this.strings.eventImportantMarker} ` : '';
        const location = event.location ? ` (${this.strings.eventLocationMarker} ${event.location})` : '';

        section.push(`- ${important}**${startStr}-${endStr}**: ${event.title}${location}`);
      });
    }

    // 會議類型分析
    if (Object.keys(this.calendar.meetingTypes).length > 0) {
      section.push(`### ${this.strings.meetingAnalysisSubtitle}`);
      Object.entries(this.calendar.meetingTypes).forEach(([type, count]) => {
        // Attempt to localize meeting type if a key exists for it, otherwise use the type as is
        const localizedType = this.strings[`meetingType${type.replace(/\s+/g, '')}`] || type;
        section.push(`- **${localizedType}**: ${count} ${this.strings.eventItemsLabel}`);
      });
    }

    return section.join('\n');
  }

  generateNewsSection() {
    const section = [`## ${this.strings.externalInfoSectionTitle}`];

    // 財經資訊
    if (this.news.finance) {
      let financeText = `- [${this.news.finance.title}](${this.news.finance.link})`;
      if (this.news.finance.sp500 && this.news.finance.sp500.value) { // Check for value specifically
        financeText += ` (${this.strings.sp500Label} ${this.news.finance.sp500.value} ${this.news.finance.sp500.change} ${this.news.finance.sp500.percentChange})`;
      }
      section.push(`### ${this.strings.financeNewsSubtitle}\n${financeText}`);
    }

    // 天氣資訊
    if (this.news.weather) {
      section.push(`### ${this.strings.weatherInfoSubtitle}\n- [${this.news.weather.title}](${this.news.weather.link})`);
    }

    // 本地新聞
    if (this.news.local && this.news.local.length > 0) {
      section.push(`### ${this.strings.localNewsSubtitle}`);
      this.news.local.forEach(item => {
        section.push(`- [${item.title}](${item.link})`);
      });
    }

    return section.join('\n');
  }

  generateRecommendations() {
    const recommendations = [`## ${this.strings.recommendationsSectionTitle}`];

    // 基於 Gmail 的建議
    if (this.gmail) {
      if (this.gmail.unreadCount > 10) {
        recommendations.push(this.strings.gmailUnreadRecommendation);
      }
      if (this.gmail.urgentEmails.length > 0) {
        recommendations.push(this.strings.gmailUrgentRecommendation);
      }
    }

    // 基於日曆的建議
    if (this.calendar) {
      if (this.calendar.busyHours > 8) {
        recommendations.push(this.strings.calendarBusyRecommendation);
      }
      if (this.calendar.nextEvent && this.calendar.nextEvent.start - new Date() < 15 * 60 * 1000) {
        recommendations.push(this.strings.calendarNextEventSoonRecommendation);
      }
    }

    // 通用建議
    const hour = new Date().getHours();
    if (hour < 9) {
      recommendations.push(this.strings.greetingGoodMorning);
    } else if (hour > 18) {
      recommendations.push(this.strings.greetingGoodEvening);
    }

    return recommendations.join('\n');
  }

  sendReport() {
    const report = this.generateReport();
    const recipient = CoreUtils.getSession();
    // Use localized report title for subject if available, else use CONFIG
    const subject = `${this.reportTitle} - ${Utilities.formatDate(this.timestamp, CONFIG.TIMEZONE, 'MM/dd')}`;

    try {
      GmailApp.sendEmail(recipient, subject, '', {
        htmlBody: this.convertToHtml(report)
      });

      console.log(`Report sent to ${recipient}`);
      return true;
    } catch (error) {
      CoreUtils.logError('Report Send', error);
      return false;
    }
  }

  convertToHtml(markdown) {
    return markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/---/g, '<hr>')
      .replace(/\n/g, '<br>');
  }

  generateBookmarksSection() {
    const section = [`## ${this.strings.bookmarksSectionTitle}`];
    this.bookmarks.items.forEach(bookmark => {
      section.push(`- [${bookmark.title}](${bookmark.link})`);
    });
    return section.join('\n');
  }

  generateFeedlySection() {
    const section = [`## ${this.strings.feedlySectionTitle}`];
    this.feedly.items.forEach(item => {
      let line = `- **${item.feedTitle}:** [${item.title}](${item.link})`;
      if (item.description && item.description !== '...') { // Check if description is meaningful
        line += ` - _${item.description}_`;
      }
      section.push(line);
    });
    return section.join('\n');
  }

  generateYouTubeSection() {
    const section = [`## ${this.strings.youtubeSectionTitle}`];
    this.youtube.items.forEach(item => {
      let line = `- [${item.title}](${item.link})`;
      if (item.watchedAt && typeof item.watchedAt === 'string' && item.watchedAt.trim() !== '') {
        try {
            const watchedDate = new Date(item.watchedAt);
            if (!isNaN(watchedDate.getTime())) { // Check if the date is valid
                line += ` (${this.strings.watchedAtLabel} ${CoreUtils.formatDate(watchedDate)})`;
            } else {
                line += ` (${this.strings.watchedAtLabel} Invalid Date - ${item.watchedAt})`;
                CoreUtils.logError('YouTube WatchedAt Formatting', `Invalid date string for watchedAt: "${item.watchedAt}"`);
            }
        } catch (e) {
            line += ` (${this.strings.watchedAtLabel} Error formatting date - ${item.watchedAt})`;
            CoreUtils.logError('YouTube WatchedAt Formatting', `Error creating Date from watchedAt: "${item.watchedAt}" - ${e.message}`);
        }
      } else if (item.watchedAt) {
        line += ` (${this.strings.watchedAtLabel} ${item.watchedAt})`;
      }
      section.push(line);
    });
    return section.join('\n');
  }

  generateErrorSummarySection() {
    if (!executionErrorSummary || executionErrorSummary.length === 0) {
        return '';
    }

    const sectionLines = [];
    sectionLines.push(`\n\n## ${this.strings.errorSectionTitle}`);

    sectionLines.push(`### ${this.strings.recordedIssuesSubtitle}`);
    executionErrorSummary.forEach(err => {
        let message = err.message;
        if (err.message.includes('Further errors occurred')) { // Check if it's the "limit reached" message
            message = this.strings.errorLimitMsg.replace('{limit}', CONFIG.MAX_ERRORS_IN_REPORT.toString());
        }
        sectionLines.push(`- **${err.context}:** ${message}`);
    });

    sectionLines.push(`\n### ${this.strings.suggestionsSubtitle}`);
    sectionLines.push(this.strings.suggestionFileErrors.replace('{basePath}', CONFIG.USER_IMPORTS_DRIVE_BASE_PATH));
    sectionLines.push(this.strings.suggestionApiQuotaErrors);
    sectionLines.push(this.strings.suggestionPermissionErrors);
    sectionLines.push(this.strings.suggestionCheckLogs.replace('{errorSheetName}', CONFIG.ERROR_SHEET));

    return sectionLines.join('\n');
  }
}

// ==================== 主執行函數 ====================

/**
 * 主執行函數 - 系統入口點
 */
function main() {
  console.log('=== GDI Daily Insights Started ===');

  try {
    executionErrorSummary = []; // Reset error summary for this run

    // 收集核心數據
    const gmailData = PrimaryDataCollector.collectGmailInsights();
    const calendarData = PrimaryDataCollector.collectCalendarInsights();
    // const newsData = ExternalDataCollector.collectNews(); // Older direct declaration - to be removed/handled by newsCollectionResult

    // 收集使用者匯入的數據
    let bookmarkData = UserImportedDataCollector.collectBookmarkInsights();
    let feedlyData = UserImportedDataCollector.collectFeedlyInsights();
    let youtubeData = UserImportedDataCollector.collectYouTubeInsights();

    // 為匯入數據提供預設結構，以防收集器因 safeExecute 捕獲的錯誤而返回 null
    const defaultImportResult = (statusMsg, fileName = 'N/A') => ({
        status: statusMsg || 'collection_error_or_null_result',
        items: [],
        count: 0,
        fileName: fileName
    });

    if (!bookmarkData) {
      bookmarkData = defaultImportResult('Bookmark data collection critically failed or returned null', CONFIG.BOOKMARKS_FILE_NAME);
      CoreUtils.logError('Main Execution - User Imports', 'Bookmark data collection critically failed or returned null. Using default empty structure.');
    }
    if (!feedlyData) {
      feedlyData = defaultImportResult('Feedly data collection critically failed or returned null', CONFIG.FEEDLY_OPML_FILE_NAME);
      CoreUtils.logError('Main Execution - User Imports', 'Feedly data collection critically failed or returned null. Using default empty structure.');
    }
    if (!youtubeData) {
      // Try to determine which YouTube file might have been attempted for more specific default filename
      let ytFileName = CONFIG.YOUTUBE_JSON_HISTORY_FILE_NAME + " or " + CONFIG.YOUTUBE_HTML_HISTORY_FILE_NAME;
      youtubeData = defaultImportResult('YouTube data collection critically failed or returned null', ytFileName);
      CoreUtils.logError('Main Execution - User Imports', 'YouTube data collection critically failed or returned null. Using default empty structure.');
    }

    // 記錄匯入數據的狀態和項目數量 (用於調試)
    // Using CoreUtils.logError for visibility as in original code, can be changed to a different log level/method if needed.
    CoreUtils.logError('Main Execution - User Imports', `Bookmark Data Status: ${bookmarkData.status}, File: ${bookmarkData.fileName}, Count: ${bookmarkData.count || (bookmarkData.items ? bookmarkData.items.length : 0)}`);
    CoreUtils.logError('Main Execution - User Imports', `Feedly Data Status: ${feedlyData.status}, File: ${feedlyData.fileName}, Count: ${feedlyData.count || (feedlyData.items ? feedlyData.items.length : 0)}`);
    CoreUtils.logError('Main Execution - User Imports', `YouTube Data Status: ${youtubeData.status}, File: ${youtubeData.fileName}, Count: ${youtubeData.count || (youtubeData.items ? youtubeData.items.length : 0)}`);

    // 提取新聞數據和位置信息
    const newsCollectionResult = ExternalDataCollector.collectNews();
    // Ensure default structure for newsData if newsCollectionResult or its newsData property is null
    const newsData = (newsCollectionResult && newsCollectionResult.newsData) ? newsCollectionResult.newsData : { finance: null, weather: null, local: [] };
    const reportLocation = newsCollectionResult ? newsCollectionResult.effectiveLocation : CONFIG.LOCATION; // Fallback to CONFIG.LOCATION
    const locationAutoDetected = newsCollectionResult ? newsCollectionResult.wasLocationAutoDetected : false;


    // 生成並發送報告
    const generator = new IntelligentReportGenerator(
        gmailData, calendarData, newsData,
        bookmarkData, feedlyData, youtubeData,
        reportLocation, locationAutoDetected
    );
    const success = generator.sendReport();

    if (success) {
      console.log('=== GDI Report Sent Successfully ===');
    } else {
      console.error('=== GDI Report Failed ===');
    }

  } catch (error) {
    CoreUtils.logError('Main Execution', error);
  }
}

/**
 * 設定自動觸發器
 */
function setupTriggers() {
  // 清除現有觸發器
  ScriptApp.getProjectTriggers().forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });

  // 設定每日觸發器 - 早上8點和下午6點
  ScriptApp.newTrigger('main')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();

  ScriptApp.newTrigger('main')
    .timeBased()
    .everyDays(1)
    .atHour(18)
    .create();

  console.log('Triggers setup completed');
}

/**
 * 初始化函數 - 第一次執行時調用
 */
function initializeGDI() {
  console.log('Initializing GDI...');

  // 創建日誌表
  CoreUtils.getLogSheet();

  // 設定觸發器
  setupTriggers();

  // 執行一次測試
  main();

  console.log('GDI initialization completed!');
}

/**
 * 手動執行測試
 */
function testRun() {
  console.log('=== Manual Test Run ===');
  main();
}

/**
 * Google Sheets 選單
 * @param {Object} e The event parameter for a simple trigger.
 */
function onOpen(e) {
  // Proceed only if the authorization mode allows UI interaction.
  // This prevents errors when onOpen is called by automated triggers.
  if (e && e.authMode === ScriptApp.AuthMode.NONE) {
    console.log('[onOpen] Executed in AuthMode.NONE (e.g., by a trigger). Skipping UI menu creation.');
    return;
  }

  // If e or e.authMode is undefined (e.g., manually run from editor, where UI is allowed),
  // or if authMode is LIMITED or FULL, proceed.
  try {
    SpreadsheetApp.getUi()
      .createMenu('📊 GDI')
      .addItem('🚀 初始化系統', 'initializeGDI') // 'Initialize System'
      .addItem('▶️ 手動執行', 'testRun')         // 'Manual Run'
      .addItem('⚙️ 設定觸發器', 'setupTriggers')   // 'Setup Triggers'
      .addToUi();
    console.log('[onOpen] GDI menu created successfully.');
  } catch (error) {
    // Log error if UI interaction fails for other reasons (e.g. no active spreadsheet)
    // Using CoreUtils.logError might be problematic if this is the first script run and log sheet isn't set up
    // So, a console.error is safer here.
    console.error('[onOpen] Error creating GDI menu: ' + error.toString());
  }
}
