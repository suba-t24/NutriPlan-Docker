/*  /public/js/mealPlanExport.js
    Handles server-side PDF download for weekly meal plan
--------------------------------------------------------------------- */
(() => {
  //-------------------------------------------------------------------
  // Config – edit if you changed route or button IDs
  //-------------------------------------------------------------------
  const EXPORT_BTN_ID = 'btn-export-mealplan';           // <button id="">
  const ENDPOINT_BASE = '/api/mealplan/export';          // Express route
  const FILENAME      = 'WeeklyMealPlan.pdf';            // Download name

  //-------------------------------------------------------------------
  // Helper: download blob as a file
  //-------------------------------------------------------------------
  function downloadBlob(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  }

  //-------------------------------------------------------------------
  // Main
  //-------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById(EXPORT_BTN_ID);
    if (!btn) {
      console.warn(`[mealPlanExport] Button #${EXPORT_BTN_ID} not found.`);
      return;
    }

    btn.addEventListener('click', async () => {
      try {
        //-----------------------------------------------------------------
        // 1. Determine user e-mail
        //-----------------------------------------------------------------
        // Option A: supplied in markup: <div data-user-email="user@x.com">
        const dataHolder = document.querySelector('[data-user-email]');
        let email = dataHolder ? dataHolder.dataset.userEmail : null;

        // Option B: fallback to prompt
        if (!email) {
          email = prompt('Enter the e-mail associated with your meal plan:');
          if (!email) return; // user cancelled
        }

        //-----------------------------------------------------------------
        // 2. Build URL and start fetch
        //-----------------------------------------------------------------
        const url = `${ENDPOINT_BASE}?email=${encodeURIComponent(email)}`;

        // UX: show loading state
        const originalText = btn.textContent;
        btn.textContent = 'Downloading…';
        btn.disabled = true;

        const res = await fetch(url);
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error || `HTTP ${res.status}`);
        }

        const blob = await res.blob();
        downloadBlob(blob, FILENAME);
      } catch (err) {
        console.error('[mealPlanExport] ', err);
        alert('Unable to download meal-plan PDF. See console for details.');
      } finally {
        // Restore button state
        if (btn) {
          btn.textContent = 'Download Meal Plan PDF';
          btn.disabled = false;
        }
      }
    });
  });
})();
