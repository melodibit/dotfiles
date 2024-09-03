set expandtab
set autoindent
set tabstop=4
set softtabstop=4
set shiftwidth=4
set textwidth=72
set backspace=indent,eol,start
set wrap!
set sidescroll=1
set list listchars=precedes:#,extends:#
set number
set joinspaces!
set modeline
set noequalalways
set formatoptions=cq
set history=1000
set nolist
set scrolloff=2

autocmd Filetype html setlocal tabstop=2 softtabstop=2 shiftwidth=2
autocmd Filetype htmldjango setlocal tabstop=2 softtabstop=2 shiftwidth=2

function! WrapForTmux(s)
  if !exists('$TMUX')
    return a:s
  endif

  let tmux_start = "\<Esc>Ptmux;"
  let tmux_end = "\<Esc>\\"

  return tmux_start . substitute(a:s, "\<Esc>", "\<Esc>\<Esc>", 'g') . tmux_end
endfunction

let &t_SI .= WrapForTmux("\<Esc>[?2004h")
let &t_EI .= WrapForTmux("\<Esc>[?2004l")

function! XTermPasteBegin()
  set pastetoggle=<Esc>[201~
  set paste
  return ""
endfunction

inoremap <special> <expr> <Esc>[200~ XTermPasteBegin()

call plug#begin()

Plug 'vim-python/python-syntax'

call plug#end()

