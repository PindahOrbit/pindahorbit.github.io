/**
 * Perfect Scrollbar
 */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const verticalExample = document.getElementById('vertical-example'),
          NOT_STARTED = document.getElementById('NOT-STARTED'),
          STARTED = document.getElementById('STARTED'),
          BEHIND = document.getElementById('BEHIND'),
          OVERDUE = document.getElementById('OVERDUE'),
          ON_TRACK = document.getElementById('ON-TRACK'),
      horizontalExample = document.getElementById('horizontal-example'),
        //objectivesScroll = document.getElementById('objectivesScroll-div'),
        cooperateActionPlansTable = document.getElementById('cooperateActionPlansTable'),
      horizVertExample = document.getElementById('both-scrollbars-example');

    // Vertical Example
    // --------------------------------------------------------------------
    if (verticalExample) {
      new PerfectScrollbar(verticalExample, {
        wheelPropagation: false
      });
    }
      if (NOT_STARTED) {
          new PerfectScrollbar(NOT_STARTED, {
        wheelPropagation: false
      });
    }
      if (STARTED) {
          new PerfectScrollbar(STARTED, {
        wheelPropagation: false
      });
    }
      if (BEHIND) {
          new PerfectScrollbar(BEHIND, {
        wheelPropagation: false
      });
    }
      if (OVERDUE) {
          new PerfectScrollbar(OVERDUE, {
        wheelPropagation: false
      });
    }
      if (ON_TRACK) {
          new PerfectScrollbar(ON_TRACK, {
        wheelPropagation: false
      });
      }
       // objectives
      //* --------------------------------------------------------------------
      /*
      if (objectivesScroll) {
          new PerfectScrollbar(objectivesScroll, {
        wheelPropagation: false
      });
      }

    */
    // --------------------------------------------------------------------
      if (cooperateActionPlansTable) {
          new PerfectScrollbar(cooperateActionPlansTable, {
        wheelPropagation: false,
        //suppressScrollY: true
      });
    }
       
    // Horizontal Example
    // --------------------------------------------------------------------
    if (horizontalExample) {
      new PerfectScrollbar(horizontalExample, {
        wheelPropagation: false,
        suppressScrollY: true
      });
    }
       
   

    // Both vertical and Horizontal Example
    // --------------------------------------------------------------------
    if (horizVertExample) {
      new PerfectScrollbar(horizVertExample, {
        wheelPropagation: false
      });
    }
  })();
});
