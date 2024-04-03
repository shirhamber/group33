from flask import Flask


###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages
## Homepage


from pages.about.about import about
app.register_blueprint(about)

from pages.contact_us.contact_us import contact_us
app.register_blueprint(contact_us)

from pages.homepage.homepage import homepage
app.register_blueprint(homepage)

from pages.meeting_user.meeting_user import meeting_user
app.register_blueprint(meeting_user)

from pages.meeting_create.meeting_create import meeting_create
app.register_blueprint(meeting_create)

from pages.user_create.user_create import user_create
app.register_blueprint(user_create)

from pages.user_connection.user_connection import user_connection
app.register_blueprint(user_connection)

from pages.user_profile.user_profile import user_profile
app.register_blueprint(user_profile)

