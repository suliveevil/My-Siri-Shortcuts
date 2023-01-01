# My Siri Shortcuts [中文](./readme_cn.org)


## Notes

## Folder Structure

Shortcuts wrote by me is stored in folder [Shortcuts](./Shortcuts/).

Shortcuts wrote by others  is stored in folder [collection](./Shortcuts/collection/).

Shortcuts modified by me is stored in folder [modified](./Shortcuts/modified/).

## Import/Export

Binary Plist Files with file extension `shortcut` is exported by Shortcuts.app.
Import is also supported. macOS QuickLook supports `shortcut` files.

How to import/export shortcuts:

1. open shortcuts.app
2. From menu bar click "File"
3. Click "Import..." or "Export..."

## My Shortcuts


### OCR Selected Area

Use with Emacs

``` emacs-lisp
;; Siri Shortcuts: OCR
;; {{{
(defun my/siri-ocr ()
  (interactive)
  (shell-command "shortcuts run \"OCR Selected Area\"")
  (do-applescript "tell application id \"org.gnu.Emacs\" to activate")
  )
(keymap-global-set "C-c M-o" #'my/siri-ocr)
;; }}}
```

### Translate File

Use with Emacs

``` emacs-lisp
;; Siri Shortcuts: Translate
;; {{{
(add-to-list 'display-buffer-alist
  (cons "\\*Async Shell Command\\*.*" (cons #'display-buffer-no-window nil)))
(defun my/siri-translate ()
  (interactive)
  (let ((tempfile
         (make-temp-file "siri-translate-" nil ".txt") ; temp file
	 ))
    (write-region (format "%s" (thing-at-point 'paragraph)) nil tempfile)
    (shell-command (format "shortcuts run \"Translate File\" -i %s &" tempfile))
    )
  (do-applescript "tell application id \"org.gnu.Emacs\" to activate")
  )
(keymap-global-set "C-c t" #'my/siri-translate)
;; }}}
```


## Shortcuts modified by me


## Shortcuts collections


## Misc



### website

[routinehub](https://routinehub.co)

[Shortcuts Gallery - 少数派](https://shortcuts.sspai.com/)

[捷径盒](https://jiejinghe.com)

[捷径社区](https://sharecuts.cn)

[捷径库](https://jiejingku.net)

[MacStories](https://www.macstories.net/shortcuts/)




