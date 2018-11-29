from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = 'index.html'

class AboutMePage(TemplateView):
    template_name = 'about_me.html'

class PcBuildsPage(TemplateView):
    template_name = 'pc_builds.html'
