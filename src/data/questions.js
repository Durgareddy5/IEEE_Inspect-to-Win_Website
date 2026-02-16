const questions = [
  {
    id: 11,
    level: "medium",
    question: "id:11 Which class contains the final answer?",
    options: [".shadow-box", ".final-key", ".secret-lock", ".winner-class"],
    correct: ".final-key",
    hints: {
      primary: "The first clue is hidden in HTML comments.",
      misleading: "Try checking the footer."
    },
    targetPages: ["/game"],
    type: "html-comment-to-css",
    hide: {
      step1: {
        place: "index.html",
        how: "<!-- CLUE: Check index.css for the answer class  -->",
        devtoolsTab: "Elements"
      },
      step2: {
        place: "style.css",
        how: ".final-key { /* ANSWER CLASS */ }",
        devtoolsTab: "Sources"
      }
    }
  },

  {
    id: 12,
    level: "medium",
    question: "id:12 What is stored in localStorage key 'Treasure'?",
    options: ["storage_777", "local_win", "M090", "medium_answer"],
    correct: "hidden_storage_key",
    hints: {
      primary: "The console will guide you to the right place.",
      misleading: "Try using incognito mode."
    },
    targetPages: ["/game"],
    type: "console-to-localstorage",
    hide: {
      step1: {
        place: "main.js",
        how: "console.log(\"CLUE: Check localStorage key 'medium2'\");",
        devtoolsTab: "Console"
      },
      step2: {
        place: "main.js",
        how: "localStorage.setItem('medium2','hidden_storage_key');",
        devtoolsTab: "Application > LocalStorage"
      }
    }
  },

  {
    id: 13,
    level: "medium",
    question: "id:13 What is the hidden text inside div#vault?",
    options: ["vault_open", "secret_inside_div", "div_lock_777", "inspect_vault"],
    correct: "inspect_vault",
    hints: {
      primary: "Look at data attributes carefully.",
      misleading: "Try clicking all buttons."
    },
    targetPages: ["/game"],
    type: "attribute-to-hidden-div",
    hide: {
      step1: {
        place: "index.html",
        how: '<button data-clue="Check element with id vault">Hint</button>',
        devtoolsTab: "Elements"
      },
      step2: {
        place: "index.html",
        how: '<div id="vault" style="display:none;">inspect_vault</div>',
        devtoolsTab: "Elements"
      }
    }
  },

  {
    id: 14,
    level: "medium",
    question: "id:14 What is the flag hidden in HTML comments?",
    options: ["comment_flag_01", "hidden_comment_win", "note_secret", "flag_comment_99"],
    correct: "hidden_comment_win",
    hints: {
      primary: "CSS can whisper the location of the answer. (For index.css go to source tab navigate to assets/index.css if code visible just refresh without closing anything.) ",
      misleading: "Try checking localStorage."
    },
    targetPages: ["/game"],
    type: "css-to-html-comment",
    hide: {
      step1: {
        place: "style.css",
        how: '#clue::after { content: "Search HTML comments"; }',
        devtoolsTab: "Elements > Styles"
      },
      step2: {
        place: "index.html",
        how: "<!-- ANSWER: hidden_comment_win -->",
        devtoolsTab: "Elements"
      }
    }
  },

  {
    id: 15,
    level: "medium",
    question: "id:15 What is the value of secret key inside shuffle.js?",
    options: ["manifest_unlock", "pwa_secret_key", "manifest_flag_01", "hidden_manifest"],
    correct: "pwa_secret_key",
    hints: {
      primary: "The clue is in the head section of the page.",
      misleading: "Try searching the footer."
    },
    targetPages: ["/game"],
    type: "meta-to-manifest",
    hide: {
      step1: {
        place: "index.html",
        how: '<meta name="next-step" content="Check manifest.json">',
        devtoolsTab: "Elements"
      },
      step2: {
        place: "manifest.json",
        how: '{ "secret": "pwa_secret_key" }',
        devtoolsTab: "Sources"
      }
    }
  },

  {
    id: 16,
    level: "medium",
    question: "id:16 What is the answer printed only in console?",
    options: ["console_win", "debug_secret_77", "final_console_flag", "log_answer"],
    correct: "final_console_flag",
    hints: {
      primary: "The clue is hidden in HTML comments.",
      misleading: "Try opening the images folder."
    },
    targetPages: ["/game"],
    type: "html-comment-to-console",
    hide: {
      step1: {
        place: "index.html",
        how: "<!-- CLUE: The answer is printed in console -->",
        devtoolsTab: "Elements"
      },
      step2: {
        place: "main.js",
        how: 'console.log("final_console_flag");',
        devtoolsTab: "Console"
      }
    }
  },

  {
    id: 17,
    level: "medium",
    question: "id:17 Which CSS variable stores the final secret?",
    options: ["--unlock", "--flag", "--secretKey", "--hiddenVar"],
    correct: "--secretKey",
    hints: {
      primary: "The clue is stored inside localStorage.",
      misleading: "Try clicking the logo."
    },
    targetPages: ["/game"],
    type: "localstorage-to-css",
    hide: {
      step1: {
        place: "main.js",
        how: 'localStorage.setItem("hint7","Check CSS :root variables")',
        devtoolsTab: "Application > LocalStorage"
      },
      step2: {
        place: "style.css",
        how: ':root { --secretKey: "root_winner"; }',
        devtoolsTab: "Elements > Styles"
      }
    }
  },

  {
    id: 18,
    level: "medium",
    question: "id:18 What is written inside Experimental?",
    options: ["file_secret_77", "hidden_file_win", "robots_answer", "text_flag"],
    correct: "hidden_file_win",
    hints: {
      primary: "Check index.html",
      misleading: "Try checking CSS."
    },
    targetPages: ["/game"],
    type: "robots-to-hidden-file",
    hide: {
      step1: {
        place: "robots.txt",
        how: "Disallow: /hidden.txt",
        devtoolsTab: "Network or direct URL"
      },
      step2: {
        place: "hidden.txt",
        how: "hidden_file_win",
        devtoolsTab: "Browser / Sources"
      }
    }
  },
  
  {
    id: 20,
    level: "medium",
    question: "id:20 Which attribute contains the answer?",
    options: ["data-answer", "data-secret", "data-win", "data-final"],
    correct: "data-secret",
    hints: {
      primary: "The console will tell you what to search for.",
      misleading: "Try checking localStorage."
    },
    targetPages: ["/game"],
    type: "console-to-attribute",
    hide: {
      step1: {
        place: "main.js",
        how: 'console.log("CLUE: Search for attribute data-secret in Elements");',
        devtoolsTab: "Console"
      },
      step2: {
        place: "index.html",
        how: '<div data-secret="medium_final_777"></div>',
        devtoolsTab: "Elements"
      }
    }
  },

  {
    id: 21,
    level: "hard",
    question: "id:21 What is the value stored in localStorage key 'hard1_final'?",
    options: ["hard_key_77", "final_hard_unlock", "storage_master", "inspect_chain"],
    correct: "inspect_chain",
    hints: {
      primary: "The Clue is hidden in the HTML page.",
      misleading: "Try checking the footer."
    },
    targetPages: ["/game"],
    type: "html-to-console-to-localstorage",
    hide: {
      step1: {
        place: "index.html",
        how: "<!-- STEP1: Open console for next clue -->",
        devtoolsTab: "Elements"
      },
      step2: {
        place: "main.js",
        how: 'console.log("STEP2: Check localStorage key hard1_final");',
        devtoolsTab: "Console"
      },
      step3: {
        place: "main.js",
        how: 'localStorage.setItem("hard1_final","inspect_chain");',
        devtoolsTab: "Application > LocalStorage"
      }
    }
  },

  {
    id: 22,
    level: "hard",
    question: "id:22 What is inside div#hardVault?",
    options: ["vault_777", "hard_div_answer", "final_hidden_box", "deep_inspect_win"],
    correct: "deep_inspect_win",
    hints: {
      primary: "CSS gives the first clue.(For index.css go to source tab navigate to assets/index.css if code visible just refresh without closing anything.)",
      misleading: "Try checking console logs."
    },
    targetPages: ["/game"],
    type: "css-to-attribute-to-hidden-div",
    hide: {
      step1: {
        place: "style.css",
        how: "/* STEP1: Find element with data-next='vault' */",
        devtoolsTab: "Sources"
      },
      step2: {
        place: "index.html",
        how: '<div data-next="vault"></div>',
        devtoolsTab: "Elements"
      },
      step3: {
        place: "index.html",
        how: '<div id="hardVault" style="display:none;">deep_inspect_win</div>',
        devtoolsTab: "Elements"
      }
    }
  },

  {
    id: 23,
    level: "hard",
    question: "id:23 What is the decoded secret from manifest.json?",
    options: ["decode_hard", "hard_decode_win", "inspect_b64_master", "final_b64"],
    correct: "inspect_b64_master",
    hints: {
      primary: "Inspect the elements tab",
      misleading: "Try checking localStorage."
    },
    targetPages: ["/game"],
    type: "robots-to-hidden-file-to-base64",
    hide: {
      step1: {
        place: "robots.txt",
        how: "Disallow: /secret/",
        devtoolsTab: "Network or direct URL"
      },
      step2: {
        place: "/secret/base.txt",
        how: "aW5zcGVjdF9iNjRfbWFzdGVy",
        devtoolsTab: "Browser / Sources"
      },
      step3: {
        place: "decode",
        how: "Base64 decode => inspect_b64_master",
        devtoolsTab: "Console (atob)"
      }
    }
  },

  {
    id: 24,
    level: "hard",
    question: "id:24 What is the flag returned from. finalHard4?",
    options: ["FLAG{META}", "FLAG{PWA}", "FLAG{HARD4_WIN}", "FLAG{NETWORK_END}"],
    correct: "FLAG{HARD4_WIN}",
    hints: {
      primary: "The head points to a file, the file points to an endpoint.",
      misleading: "Try checking the images folder."
    },
    targetPages: ["/game"],
    type: "meta-to-manifest-to-network",
    hide: {
      step1: {
        place: "index.html",
        how: '<meta name="step1" content="Check manifest.json">',
        devtoolsTab: "Elements"
      },
      step2: {
        place: "manifest.json",
        how: '{ "next": "/api/finalHard4" }',
        devtoolsTab: "Sources"
      },
      step3: {
        place: "backend response",
        how: '{ "flag": "FLAG{HARD4_WIN}" }',
        devtoolsTab: "Network > Response"
      }
    }
  },

  {
    id: 25,
    level: "hard",
    question: "id:25 What is the answer hidden in HTML comment?",
    options: ["final_comment_77", "hidden_note_hard", "inspect_comment_master", "hard_flag_999"],
    correct: "inspect_comment_master",
    hints: {
      primary: "Console leads to Answer.",
      misleading: "Try checking the network tab."
    },
    targetPages: ["/game"],
    type: "console-to-css-to-html",
    hide: {
      step1: {
        place: "main.js",
        how: 'console.log("STEP1: Check CSS variable --step2");',
        devtoolsTab: "Console"
      },
      step2: {
        place: "style.css",
        how: ':root { --step2: "Search HTML comments"; }',
        devtoolsTab: "Elements > Styles"
      },
      step3: {
        place: "index.html",
        how: "<!-- ANSWER: inspect_comment_master -->",
        devtoolsTab: "Elements"
      }
    }
  },

  {
    id: 26,
    level: "hard",
    question: "id:26 What is printed after running the command in console?",
    options: ["run_me_77", "console_exec_win", "hard_console_flag", "inspect_execute"],
    correct: "inspect_execute",
    hints: {
      primary: "The hidden input starts the chain.",
      misleading: "Try checking localStorage."
    },
    targetPages: ["/game"],
    type: "hidden-input-to-attribute-to-console",
    hide: {
      step1: {
        place: "index.html",
        how: '<input type="hidden" value="Find element with id=executor">',
        devtoolsTab: "Elements"
      },
      step2: {
        place: "index.html",
        how: '<div id="executor" data-run="runSecret()"></div>',
        devtoolsTab: "Elements"
      },
      step3: {
        place: "main.js",
        how: 'function runSecret(){ console.log("inspect_execute"); }',
        devtoolsTab: "Sources / Console"
      }
    }
  },

  {
    id: 27,
    level: "hard",
    question: "id:27 What is stored in localStorage key 'hard7'?",
    options: ["hard_store_77", "final_hard7", "inspect_storage_win", "chain_complete"],
    correct: "chain_complete",
    hints: {
      primary: "CSS points to Answer.",
      misleading: "Try searching for the answer directly."
    },
    targetPages: ["/game"],
    type: "css-to-hidden-div-to-localstorage",
    hide: {
      step1: {
        place: "style.css",
        how: '#clueBox::after { content:"Find hidden div #step2"; }',
        devtoolsTab: "Elements > Styles"
      },
      step2: {
        place: "index.html",
        how: '<div id="step2" style="display:none;">Check localStorage key hard7</div>',
        devtoolsTab: "Elements"
      },
      step3: {
        place: "main.js",
        how: 'localStorage.setItem("hard7","chain_complete");',
        devtoolsTab: "Application > LocalStorage"
      }
    }
  },

  {
    id: 28,
    level: "hard",
    question: "id:28 What is the secret value hidden inside the final vault element?",
    options: ["vault_secret_88", "final_css_unlock", "deep_hidden_key", "inspect_vault_final"],
    correct: "inspect_vault_final",
    hints: {
      primary: "HTML gives the Clue",
      misleading: "Try checking the network tab."
    },
    targetPages: ["/game"],
    type: "html-to-css-to-hidden-div",
    hide: {
      step1: {
        place: "index.html",
        how: "<!-- STEP1: Check style.css for clue named #vaultHint -->",
        devtoolsTab: "Elements"
      },
      step2: {
        place: "style.css",
        how: "#vaultHint::after { content: \"STEP2: Find element with id=finalVault\"; }",
        devtoolsTab: "Sources / Elements > Styles"
      },
      step3: {
        place: "index.html",
        how: "<div id='finalVault' style='display:none;'>inspect_vault_final</div>",
        devtoolsTab: "Elements"
      }
    }
  },

  {
    id: 29,
    level: "hard",
    question: "id:29 What is the final secret printed after executing the hidden function?",
    options: ["console_chain_99", "execute_me_now", "inspect_exec_final", "final_run_flag"],
    correct: "inspect_exec_final",
    hints: {
      primary: "Local Storage reveals the Clue.",
      misleading: "Try searching in HTML comments."
    },
    targetPages: ["/game"],
    type: "localstorage-to-element-to-console",
    hide: {
      step1: {
        place: "main.js",
        how: "localStorage.setItem('hard29_clue','Find element with data-run=\"unlockFinal()\"');",
        devtoolsTab: "Application > LocalStorage"
      },
      step2: {
        place: "index.html",
        how: "<button id='finalBtn' data-run='unlockFinal()'>Final</button>",
        devtoolsTab: "Elements"
      },
      step3: {
        place: "main.js",
        how: "function unlockFinal(){ console.log('inspect_exec_final'); }",
        devtoolsTab: "Sources / Console"
      }
    }
  },

  {
    id: 30,
    level: "hard",
    question: "id:30 What is the value stored in the final tooltip?",
    options: ["tooltip_win", "final_hint_777", "hard_tooltip_secret", "inspect_final_boss"],
    correct: "inspect_final_boss",
    hints: {
      primary: "Navigate to Elements page and check for div with id='startHard10'",
      misleading: "Try checking the console."
    },
    targetPages: ["/game"],
    type: "element-to-style-to-tooltip",
    hide: {
      step1: {
        place: "index.html",
        how: '<div id="startHard10" data-step="checkStyles"></div>',
        devtoolsTab: "Elements"
      },
      step2: {
        place: "style.css",
        how: "#startHard10 { border: 1px solid; } /* STEP2: Find #finalBoss */",
        devtoolsTab: "Sources / Elements > Styles"
      },
      step3: {
        place: "index.html",
        how: '<p id="finalBoss" title="inspect_final_boss">You are close</p>',
        devtoolsTab: "Elements"
      }
    }
  }

];


export default questions;

