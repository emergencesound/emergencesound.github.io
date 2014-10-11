# Setting Up

### get `brew`

[Brew](http://brew.sh/) is the missing package manager for MacOS.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install wget
```

### get a nice new terminal

```
wget -O ~/.git-prompt.sh https://raw.githubusercontent.com/Droogans/dotfiles/mac/.git-prompt.sh
wget -O ~/.bash_aliases https://raw.githubusercontent.com/Droogans/dotfiles/mac/.bash_aliases
wget -O ~/.git-completion.sh https://raw.githubusercontent.com/Droogans/dotfiles/mac/.git-completion.sh
wget -O ~/.gitconfig https://raw.githubusercontent.com/Droogans/dotfiles/mac/.gitconfig
echo "source ~/.bash_aliases ~/.git-prompt.sh ~/.git-completion.sh" >> ~/.bash_profile
```

Close/reopen your terminal.

### set sublime text up as your editor

Download [Sublime Text](http://www.sublimetext.com/2).

```
mkdir ~/bin
ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
export EDITOR='subl -w'
```

### get setup with github

[Make a profile](https://github.com/join) on github.

Generate a new ssh key

```
ssh-keygen -t rsa -C "james.yates3@gmail.com"
```

Hit enter to keep it the default name, `id_rsa`.
You can leave the password blank if you don't want to have to enter it every time. Otherwise, make the password pretty short and quick.

```
pbcopy < ~/.ssh/id_rsa.pub
```

Go to https://github.com/settings/ssh, and "Add SSH key".

Title it something like "Home Mac".

Paste the public key in the "Key" area.

Never share, post, or save your private key (`~/.ssh/id_rsa`) under *any* circumstances.

### get this repo installed

```
mkdir ~/blog && cd ~/blog
git clone git@github.com:emergencesound/emergencesound.github.io
cd ./emergencesound.github.io.git
```

### get ruby and jekyll set up

```
brew install rbenv ruby-build rbenv-gem-rehash
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
rbenv install 1.9.3-p547
rbenv global 1.9.3-p547
gem update
gem install jekyll bundler
```

### get this repo set up

```
bundle install
jekyll serve --watch
```

Open [your local version](http://localhost:4000/) of the site, start editing the css/html, and save it.

### saving your work

```
git st
```

Get an overview of your changes

```
git df
```

Get a detailed summary of your changes. You can also get details from individual files with `git df [FILENAME]`.

```
git aa
```

Add everything. You can also add individual files with `git add [FILENAME]`.

```
git ci
```

Commit your changes. This will prompt you to write a commit message. Save it and close it when you're done.

```
git origin
```

Push your changes up to the github repository. This will publish your changes!

### updating changes

If, by chance, I update the repository, you'll need to refresh your local copy. You can do this with

```
git pull origin master
```

Make sure you have a clean (aka green) working copy first! If you don't, you'll need to save your work before updating.

### further reading

http://jekyllrb.com/docs/structure/

Just keep hitting next and reading up on how the `.yml` files generate the site, and how to edit the pages there.
