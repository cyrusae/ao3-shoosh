#### This isn't code; this is a notes file for scraps of code I haven't put where they belong yet.

Maybe will end up using pipes? (Hehehe extended sounds of pipes.)
~~~
import { pipeProps } from 'next-pipe-props' 

function TheCSS({ idNeeded }) {
 return <textarea disabled></textarea>
}

export default TheCSS;
~~~

Thinking about needs...

- UserVerify generates the "this mutes {user}, also known by the pseuds {pseuds}." text
- Only generate verify/display pseuds if the pseuds array's length is greater than 1 
- Would a hasPseuds boolean be useful or overkill versus checking manually on generation?
- Would like to make it a single export that changes content entirely based on what's being muted/hidden...

### Concept: input handler?
- Called by WorkHide/UserMute input functions with their input and a work vs user declaration (state and props respectively?)
0. Trim whitespace and check for illegal input
1. Check for url by looking for slashes
- If work:
2. If url, trim to work ID
3. Send work ID to the appropriate function
- If user:
2. If url, trim to username
3. If not url, check for pseuds by looking for spaces
4. If pseud and username, trim to username (find index of parentheses)
5. Check for illegal characters in username
6. If illegal characters are present, throw error
7. If not, send username to the appropriate function

This would allow the resulting CSS to be generated with just `.{props.what}-{props.id} { display: none !important; }`
- Escape the angle brackets?

### Props vs state
State: the original user input (is only needed by the input handler)

Props: 
- what: 'work' | 'user'
- id: ''

Works-only:
- restricted (boolean)
- author (string)
- title (string)

Users-only: 
- username (string)
- pseuds (string)

work --> WorkHide

user --> UserMute

- WorkVerify counterpart to UserVerify: "This hides {title}, by {author}. Would you also like to mute the author?"
- MuteAddendum checks restricted/unrestricted status; returns input field if restricted, runs UserMute if unrestricted
- MuteAddendum should be able to be nested in its own button I think?

Later,

WorkHide --> TheCSS(id, work)

UserMute --> TheCSS(id, user)

So TheCSS's output should look like
~~~
const cssOutput = '<textarea disabled>' + '.' + {props.what} + '-' + '{props.id}' + '{ display: none !important; }' + '</textarea>';
~~~
- Define state of 'user', 'work', or 'user after work' (manual add)/'user from work' (does not require double-checking) - or, eventually, 'multiple works' - but maybe elsewhere?
- Yeah:
~~~
return (
 <>
  {cssOutput}
  (User && <>
   <UserVerify />
   <CopyCat />
  </>)
  (Work && <>
   <WorkVerify />
   <CopyCat />
   <MuteAddendum />
  </>)
  (UserFromWork && 
   <CopyCat /> 
  )
  (UsersCoauthoredWork && <>
   <UserCoauthorsVerify />
   <CopyCat />
  )
 </>
)
~~~

And MuteAddendum is something like... Creates the button that sets the state that determines what kind of mute is needed

MuteAddendum --> if restricted, user input option (and ability to add multiple?)

- MuteFromWork checks for multiple authors first (from either)
- May want to note that author mute should supersede hiding a work and thus make that one unnecessary
- Detection of coauthors will also set the UsersCoauthoredWork because I want to verify either way on that one 

#### **Eventual QOL improvement feature:** Ability to add multiple works (at the expense of not getting user option)
- Does this mean CSS should be generated separately as interior vs exterior text so they can be daisy-chained more easily?
- Probably

### Note on timelines
- Having just a functioning mute or just a functioning hide is enough to publish (with a note on the forthcoming feature)
- Having both is enough to call a 1.0.0
- Just I want to make sure both of those are made in a way that leaves room easily for adding multi-work hide and work-based author mute without changing anything upstream 
- How will user-from-work handle multiple authors?
- Will existence of getting coauthors from work mean should add ability to mute multiple from restricted work as well? 
- On the bright side, that should be possible as soon as multiple works are also possible 

## Thought on edge cases
- What if someone does want to paste in the ID directly?
- I don't have a way to check whether something is a username that's all numbers, or an ID 
- Toggle button automatically on 'username' that can be toggled to ID?
- I don't know how many people are comfortable getting the ID but not writing the CSS but whatever works 